/**
 * @file page.js
 * @description Multi-step checkout page covering address, payment and order review.
 * @module app/(Home)/checkout/page
 */

import CheckoutSection from '@/components/checkout/CheckoutSection';
import CheckoutStepper from '@/components/checkout/CheckoutStepper';
import React from 'react';

const page = () => {
  //chcekout page
  return (
    <div>
      <CheckoutStepper />
      <CheckoutSection />
    </div>
  );
};

export default page;
