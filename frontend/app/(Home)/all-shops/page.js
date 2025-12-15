/**
 * @file page.js
 * @description All vendor shops discovery page with category filter.
 * @module app/(Home)/all-shops/page
 */

import AllShops from '@/components/all-shops/AllShops';
import DiscoverCategories from '@/components/all-shops/DiscoverCategories';
import SupportLocal from '@/components/all-shops/SupportLocal';
import React from 'react';

const page = () => {
  return (
    <div>
      <DiscoverCategories />
      <AllShops />
      <SupportLocal />
    </div>
  );
};

export default page;
