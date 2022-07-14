import React, {useState, useEffect, useMemo} from 'react';

import CarfaxTableRowReportView from './carfax-table-row-report.view';

export default function CarfaxContainer({navigation, ...props}) {
  const handleView = (link) => {
    // console.log("aaaaaa");
    window.open(link, '_blank');
  }

  return (
    <CarfaxTableRowReportView
      {...props}
      onView={handleView}
    />
  );
}
