/**
 * @file page.js
 * @description Shopping cart page displaying all cart items with checkout CTA.
 * @module app/(Home)/cart/page
 */

import CartProductList from '@/components/cart/CartProductList';
import CheckoutSteps from '@/components/cart/CheckoutSteps';
import React from 'react';

const page = () => {
  return (
    <div>
      <CartProductList />
    </div>
  );
};

export default page;
