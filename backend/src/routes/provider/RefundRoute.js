/**
 * @file RefundRoute.js
 * @description Express router for provider-side refund management endpoints.
 * @module routes/provider/RefundRoute
 */

import { Router } from 'express';
import { requestProviderRefund } from '../controllers/provider/CreateRefundController.js';
import { listProviderRefunds } from '../controllers/provider/RefundController.js';

const router = Router();

/**
 * Provider refund routes
 * - List refunds assigned to a provider
 * - Submit provider refund request
 */
router.get('/', listProviderRefunds);
router.post('/request', requestProviderRefund);

export default router;
