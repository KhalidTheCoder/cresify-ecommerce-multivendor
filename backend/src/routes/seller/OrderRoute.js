/**
 * @file OrderRoute.js
 * @description Express router for seller order management and fulfilment status endpoints.
 * @module routes/seller/OrderRoute
 */

import { Router } from 'express';
import {
  getSellerOrders,
  orderStats,
  orderStatusUpdate,
  paymentHistory,
} from '../controllers/seller/orderController.js';

const router = Router();

/**
 * Route to get seller orders.
 * Method: GET
 * Endpoint: seller/order
 */
router.get('/', getSellerOrders);
router.put('/', orderStatusUpdate);
router.get('/paymentHistory/:id', paymentHistory);
router.get('/orderStats', orderStats);

export default router;
