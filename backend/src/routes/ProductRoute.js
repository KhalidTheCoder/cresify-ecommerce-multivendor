/**
 * @file ProductRoute.js
 * @description Express router for product listing, search, and seller CRUD endpoints.
 * @module routes/ProductRoute
 */

import { Router } from 'express';
import {
  allLocation,
  allProduct,
  deleteProduct,
  editProduct,
  getSingleProduct,
  myProduct,
  saveProduct,
} from '../controllers/ProductController.js';

const router = Router();
router.post('/save', saveProduct);
router.delete('/delete/:id', deleteProduct);
router.put('/edit', editProduct);
router.get('/myProduct/:id', myProduct);
router.get('/singleProduct/:id', getSingleProduct);
router.get('/', allProduct);
router.get('/location', allLocation);

export default router;
