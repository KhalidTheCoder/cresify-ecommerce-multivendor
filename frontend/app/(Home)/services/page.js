/**
 * @file page.js
 * @description Services listing page with category filter and provider search.
 * @module app/(Home)/services/page
 */

import SupportEntrepreneurs from '@/components/shared/SupportEntrepreneurs';
import AllServiceProviders from '@/components/services/AllServiceProviders';
import ServicesHeading from '@/components/services/ServicesHeading';
import React from 'react';

const page = () => {
  return (
    <div>
      <ServicesHeading />
      {/* <ServiceCategories /> */}
      <AllServiceProviders />
      <SupportEntrepreneurs />
    </div>
  );
};

export default page;
