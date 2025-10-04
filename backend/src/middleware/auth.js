/**
 * @file auth.js
 * @description Authentication and authorization middleware for Cresify.
 *              Verifies JWT tokens and enforces role-based access control.
 * @module middleware/auth
 */

import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

/**
 * Middleware to verify that the request carries a valid JWT access token.
 * Attaches the authenticated user to `req.user`.
 *
 * @param {import('express').Request}  req  - Express request object.
 * @param {import('express').Response} res  - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 * @returns {void}
 */
export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized — no token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({ success: false, message: 'Unauthorized — user not found.' });
    }

    req.user = user;
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'Unauthorized — invalid token.' });
  }
};

/**
 * Middleware that restricts access to users whose role matches one of the
 * provided allowed roles.
 *
 * @param {...string} roles - One or more allowed role strings (e.g. 'admin', 'seller').
 * @returns {import('express').RequestHandler} Express middleware function.
 */
export const authorizeRoles =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      return res.status(403).json({
        success: false,
        message: `Forbidden — role '${req.user?.role}' is not permitted to access this resource.`,
      });
    }
    next();
  };

/** Shorthand middleware for admin-only routes. */
export const isAdmin = authorizeRoles('admin');

/** Shorthand middleware for seller-only routes. */
export const isSeller = authorizeRoles('seller');

/** Shorthand middleware for service-provider-only routes. */
export const isProvider = authorizeRoles('provider');
