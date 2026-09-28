import { Router } from 'express';
import { mercadoPagoWebhook } from '../controllers/webhook.controller';

const router = Router();

router.post('/mercadopago', mercadoPagoWebhook);

export default router;
