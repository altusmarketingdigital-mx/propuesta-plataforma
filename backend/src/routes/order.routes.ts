import { Router } from 'express';
import { createOrder } from '../controllers/order.controller';

const router = Router();

// Endpoint para procesar el checkout y descontar inventario
router.post('/checkout', createOrder);

export default router;
