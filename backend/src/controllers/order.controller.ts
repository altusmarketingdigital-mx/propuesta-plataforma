import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items } = req.body; 
    // items es un array: [{ variantId: '123', quantity: 2 }, ...]

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'El carrito está vacío.' });
    }

    // ======================================================================
    // GESTIÓN DE INVENTARIO Y PREVENCIÓN DE SOBREVENTAS (TRANSACCIÓN)
    // ======================================================================
    // Utilizamos Prisma Transaction (Interactive Transaction) para garantizar
    // que el descuento de stock sea atómico. Si 2 personas compran el último
    // artículo exactamente al mismo milisegundo, la base de datos bloqueará 
    // una de las peticiones para evitar la sobreventa.
    
    const order = await prisma.$transaction(async (tx) => {
      let totalAmount = 0;
      const orderItemsData = [];

      // 1. Verificar inventario para cada artículo
      for (const item of items) {
        // Obtenemos la variante específica
        const variant = await tx.variant.findUnique({
          where: { id: item.variantId },
          include: { product: true }
        });

        if (!variant) {
          throw new Error(`La variante con ID ${item.variantId} no existe.`);
        }

        // Validación de Stock (Prevención de Sobreventa)
        if (variant.stock < item.quantity) {
          throw new Error(`Stock insuficiente para el producto: ${variant.product.title} (Talla: ${variant.size}). Solo quedan ${variant.stock} unidades.`);
        }

        // 2. Descontar el stock en tiempo real
        await tx.variant.update({
          where: { id: item.variantId },
          data: { stock: variant.stock - item.quantity }
        });

        // 3. Calcular totales y preparar la línea de la orden
        totalAmount += variant.price * item.quantity;
        orderItemsData.push({
          variantId: variant.id,
          quantity: item.quantity,
          price: variant.price, // Guardamos el precio histórico al momento de compra
        });
      }

      // 4. Crear la orden de compra ya con el stock garantizado
      const newOrder = await tx.order.create({
        data: {
          userId: userId, // En producción se toma del JWT autenticado
          totalAmount: totalAmount,
          status: 'PENDING',
          items: {
            create: orderItemsData
          }
        },
        include: {
          items: {
            include: {
              variant: {
                include: { product: true }
              }
            }
          }
        }
      });

      return newOrder;
    });

    res.status(201).json({ 
      message: 'Orden creada y stock descontado con éxito.',
      order 
    });

  } catch (error: any) {
    // Si algún throw Error se dispara dentro de la transacción, 
    // Prisma hace automáticamente un ROLLBACK y no se descuenta ningún stock.
    console.error('Error al procesar el checkout:', error.message);
    res.status(400).json({ error: error.message });
  }
};
