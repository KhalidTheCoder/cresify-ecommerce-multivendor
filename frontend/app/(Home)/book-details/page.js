/**
 * @file page.js
 * @description Step 2 of the booking flow — booking summary review and payment.
 * @module app/(Home)/book-details/page
 */

import BookingPaymentPage from '@/components/book-details/BookingPaymentPage';
import StepIndicator from '@/components/book-details/StepIndicator';
import React from 'react';

const page = () => {
  return (
    <div>
      <StepIndicator />
      <BookingPaymentPage />
    </div>
  );
};

export default page;
