/**
 * @file SellerOverview.js
 * @description Express router for seller dashboard overview and analytics endpoints.
 * @module routes/SellerOverview
 */

import { Router } from 'express';
import {
  providerOverview,
  sellerOverview,
} from '../controllers/seller/SellerOverviewController.js';

const router = Router();
router.get('/:id', sellerOverview);
router.get('/provider/:id', providerOverview);

export default router;
