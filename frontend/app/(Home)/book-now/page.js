/**
 * @file page.js
 * @description Step 1 of the booking flow — date and time slot selection.
 * @module app/(Home)/book-now/page
 */

import BookingCalendar from '@/components/book-now/BookingDateTimePage';
import BookingSteps from '@/components/book-now/BookingSteps';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BookingSteps />
        <BookingCalendar />
      </Suspense>
    </div>
  );
};

export default page;
