/**
 * @file money.js
 * @description Currency formatting and multi-vendor payout split calculation utilities.
 * @module utils/money
 */

// Convert a monetary value to two decimal places
export const toTwo = (v) => Number(Number(v || 0).toFixed(2));
