/**
 * @file errorHandler.js
 * @description Centralised Express error-handling middleware and async wrapper.
 *              Provides a consistent JSON error response shape across all routes.
 * @module middleware/errorHandler
 */

/**
 * Wraps an async route handler to catch rejected promises and forward them to
 * the Express error handler, eliminating repetitive try/catch blocks.
 *
 * @param {Function} fn - Async Express route handler.
 * @returns {import('express').RequestHandler} Wrapped handler that calls next(err) on failure.
 *
 * @example
 * router.get('/example', asyncHandler(async (req, res) => {
 *   const data = await SomeModel.find();
 *   res.json({ success: true, data });
 * }));
 */
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

/**
 * Global Express error-handling middleware.
 * Must be registered last in the middleware chain (four-argument signature).
 *
 * @param {Error}  err  - Error object forwarded from next(err).
 * @param {import('express').Request}  req  - Express request object.
 * @param {import('express').Response} res  - Express response object.
 * @param {import('express').NextFunction} _next - Express next function (required by Express to identify error middleware).
 * @returns {void}
 */
// eslint-disable-next-line no-unused-vars
export const globalErrorHandler = (err, req, res, _next) => {
  console.error(err.stack);

  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      success: false,
      message: 'File size too large. Please upload an image smaller than 15 MB.',
      error: 'PayloadTooLargeError',
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'An unexpected error occurred.',
    error: err.name || 'ServerError',
  });
};
