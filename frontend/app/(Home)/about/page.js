/**
 * @file page.js
 * @description About Cresify page with brand story, mission, vision and company milestones.
 * @module app/(Home)/about/page
 */

import AboutCresify from '@/components/about/AboutCresify';
import MissionVision from '@/components/about/MissionVision';
import OurStory from '@/components/about/OurStory';
import React from 'react';

const page = () => {
  return (
    <div>
      <AboutCresify />
      <OurStory />
      <MissionVision />
    </div>
  );
};

export default page;
