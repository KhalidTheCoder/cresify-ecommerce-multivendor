/**
 * @file RefundRoute.js
 * @description Express router for customer refund request endpoints.
 * @module routes/customer/RefundRoute
 */

import { Router } from 'express';
import {
  getRefund,
  listMyRefunds,
  requestRefund,
} from '../controllers/customer/RefundController.js';

const router = Router();

/**
 * Customer refund routes
 */
router.post('/request', requestRefund);
// list refunds for current customer
router.get('/', listMyRefunds);
// get single refund detail
router.get('/:id', getRefund);

export default router;
