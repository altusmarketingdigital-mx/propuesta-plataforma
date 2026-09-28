import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: { variants: true, images: true, category: true },
    });
    res.status(200).json({ status: 'success', data: products });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error al obtener productos' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { title, description, slug, categoryId, price, size, color, sku, stock } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        title, description, slug, categoryId,
        variants: {
          create: [{ size, color, sku, price, stock }]
        }
      }
    });
    res.status(201).json({ status: 'success', data: product });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error al crear producto' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.variant.deleteMany({ where: { productId: id } });
    await prisma.product.delete({ where: { id } });
    res.status(200).json({ status: 'success', message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error al borrar producto' });
  }
};
