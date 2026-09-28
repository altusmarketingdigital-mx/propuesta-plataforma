import { Router } from 'express';
import { processMercadoPago, processPayPal } from '../controllers/payment.controller';

const router = Router();

router.post('/mercadopago', processMercadoPago);
router.post('/paypal', processPayPal);

export default router;
