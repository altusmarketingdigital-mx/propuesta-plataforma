import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ==========================================
// WEBHOOKS PARA ACTUALIZAR STATUS DE PEDIDO
// ==========================================

export const mercadoPagoWebhook = async (req: Request, res: Response) => {
  try {
    const event = req.body;
    
    // Validar que el evento sea de tipo "payment" y esté "approved"
    if (event.type === 'payment') {
      const paymentData = event.data; // Aquí buscaríamos el ID en Mercado Pago API
      
      // Actualizar la orden a PAID en la base de datos de TribuSport
      // await prisma.order.update({ ... data: { status: 'PAID' }})
      console.log(`[Webhook MP] Pago confirmado para la transacción ${paymentData.id}`);
    }
    
    res.status(200).send('Webhook recibido');
  } catch (error) {
    console.error('Error procesando Webhook de Mercado Pago');
    res.status(500).send('Error Interno');
  }
};
