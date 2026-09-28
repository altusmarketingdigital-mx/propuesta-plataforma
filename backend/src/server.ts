import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Cargar variables de entorno (ej. DATABASE_URL)
dotenv.config();

// Inicializar la aplicación de Express y Prisma (Base de datos)
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Middlewares de seguridad y parseo
app.use(cors({ origin: '*' })); // En producción debe restringirse a https://tribusport.mx
app.use(express.json()); // Permitir que la API reciba datos en formato JSON

// ==========================================
// AUDITORÍA DE SEGURIDAD (FASE 5)
// ==========================================
// 1. Ocultar que usamos Express
app.disable('x-powered-by');

// 2. Simulador de Rate Limiting (Prevención de ataques DDOS / Fuerza Bruta)
app.use((req, res, next) => {
  // Aquí se usaría "express-rate-limit"
  // windowMs: 15 * 60 * 1000 (15 minutos)
  // max: 100 (límite de peticiones por IP)
  next();
});

// 3. Sanitización de Inputs (Prevención de Inyección SQL/NoSQL)
// Todo el tráfico ya pasa por Prisma Client que tiene protección nativa contra SQL Injection.

// ==========================================
// RUTAS DE LA API (Endpoints)
// ==========================================
import productRoutes from './routes/product.routes';
import authRoutes from './routes/auth.routes';
import orderRoutes from './routes/order.routes';
import paymentRoutes from './routes/payment.routes';
import shippingRoutes from './routes/shipping.routes';
import webhookRoutes from './routes/webhook.routes';

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/webhooks', webhookRoutes);

// Rutas de prueba (Healthcheck)
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'success', 
    message: 'El motor del E-commerce TribuSport está funcionando correctamente 🚀' 
  });
});

app.get('/api/db-check', async (req: Request, res: Response) => {
  try {
    // Intenta hacer una consulta muy rápida a la BD
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: 'success', message: 'Conexión a PostgreSQL establecida exitosamente 📦' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error conectando a la base de datos', details: error });
  }
});

// ==========================================
// INICIAR SERVIDOR
// ==========================================
app.listen(PORT, () => {
  console.log(`[BACKEND] Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`[BACKEND] Revisa el estado en http://localhost:${PORT}/api/health`);
});
