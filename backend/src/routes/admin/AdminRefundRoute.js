/**
 * @file AdminRefundRoute.js
 * @description Express router for admin refund resolution endpoints.
 * @module routes/admin/AdminRefundRoute
 */

import { Router } from 'express';
import {
  getRefund,
  listSellerRefunds,
  reviewRefund,
} from '../controllers/admin/AdminRefundController.js';
const router = Router();

import { reviewServiceRefund } from '../controllers/admin/AdminRefundController.js';

router.get('/', listSellerRefunds);
router.get('/:id', getRefund);
router.post('/review', reviewRefund);
router.post('/service-review', reviewServiceRefund);

export default router;
