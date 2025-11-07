/**
 * @file StripeRoute.js
 * @description Express router for Stripe Connect onboarding endpoints.
 * @module routes/seller/StripeRoute
 */

import { Router } from 'express';
import {
  createConnectLink,
  unlinkAccount,
  updateStripeAccount,
} from '../controllers/seller/StripeConnectController.js';

import {
  refreshStripeAccount,
  setStripeFlags,
} from '../controllers/seller/StripeConnectController.js';

const router = Router();

router.post('/connect', createConnectLink);
router.post('/unlink', unlinkAccount);
router.post('/update', updateStripeAccount);
router.post('/refresh', refreshStripeAccount);
router.post('/set-flags', setStripeFlags);

export default router;
