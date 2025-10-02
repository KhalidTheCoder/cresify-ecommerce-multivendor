/**
 * @file constants.js
 * @description Application-wide constants for the Cresify backend.
 * @module config/constants
 */

/** Platform name */
export const PLATFORM_NAME = 'Cresify';

/** Default pagination limit */
export const DEFAULT_PAGE_LIMIT = 20;

/** Maximum file upload size in bytes (15 MB) */
export const MAX_UPLOAD_SIZE = 15 * 1024 * 1024;

/** Stripe platform fee percentage */
export const PLATFORM_FEE_PERCENT = 10;

/** Refund eligibility window in days */
export const REFUND_WINDOW_DAYS = 30;
