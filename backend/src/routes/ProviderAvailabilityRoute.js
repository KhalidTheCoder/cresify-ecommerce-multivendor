/**
 * @file ProviderAvailabilityRoute.js
 * @description Express router for service-provider availability schedule endpoints.
 * @module routes/ProviderAvailabilityRoute
 */

import { Router } from 'express';
import {
  blockProviderDay,
  blockProviderSlot,
  getProviderAvailability,
  getProviderBookingsForDate,
  updateProviderAvailability,
} from '../controllers/ProviderAvailabilityController.js';
import {
  createDate,
  createTimeslot,
  deleteDate,
  deleteTimeslot,
  getProviderDates,
  getProviderTimeslots,
} from '../controllers/provider/ProviderController.js';

const router = Router();

/**
 * @route GET /provider-availability/:providerId
 * @desc Get provider's availability settings
 */
router.get('/:providerId', getProviderAvailability);

// create date
router.post('/createDate', createDate);

router.delete('/deleteDate/:id', deleteDate);

router.get('/getProviderDates/:id', getProviderDates);

/**
 * @route PUT /provider-availability/:providerId
 * @desc Update provider's availability settings
 */
router.put('/:providerId', updateProviderAvailability);

/**
 * @route POST /provider-availability/:providerId/block-day
 * @desc Block an entire day for a provider
 */
router.post('/:providerId/block-day', blockProviderDay);

/**
 * @route POST /provider-availability/:providerId/block-slot
 * @desc Block a specific time slot for a provider
 */
router.post('/:providerId/block-slot', blockProviderSlot);

/**
 * @route GET /provider-availability/:providerId/bookings
 * @desc Get all bookings for a provider on a specific date
 */
router.get('/:providerId/bookings', getProviderBookingsForDate);

//time slots route

router.post('/createTimeSlot', createTimeslot);
router.delete('/deleteTimeSlot/:id', deleteTimeslot);
router.get('/getProviderTimeSlots/:date', getProviderTimeslots);

export default router;
