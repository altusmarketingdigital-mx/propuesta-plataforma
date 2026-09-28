import { Router } from 'express';
import { calculateShipping, createShippingLabel } from '../controllers/shipping.controller';

const router = Router();

router.post('/rates', calculateShipping);
router.post('/label', createShippingLabel);

export default router;
