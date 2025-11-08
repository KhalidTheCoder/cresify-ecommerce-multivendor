/**
 * @file AdminOverviewRoute.js
 * @description Express router for admin platform analytics and KPI overview endpoints.
 * @module routes/admin/AdminOverviewRoute
 */

import { Router } from 'express';

/**
 * Controller imports
 */
import { adminOverview } from '../controllers/admin/AdminOverviewController.js';

const router = Router();

/**
 * @route   GET /admin/overview
 * @desc    Admin overview
 * @access  Admin
 * @controller adminOverview
 */
router.get('/', adminOverview);

export default router;
