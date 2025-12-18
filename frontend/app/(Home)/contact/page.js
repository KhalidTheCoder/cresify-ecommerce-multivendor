/**
 * @file page.js
 * @description Contact us page with form submission and contact information cards.
 * @module app/(Home)/contact/page
 */

import ContactSection from '@/components/contact/ContactSection';
import GetInTouch from '@/components/contact/GetInTouch';
import React from 'react';

const page = () => {
  return (
    <div>
      <GetInTouch />
      <ContactSection />
    </div>
  );
};

export default page;
