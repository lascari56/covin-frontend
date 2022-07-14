import React, {useState, useEffect, useMemo} from 'react';

import CarfaxTableRowView from './carfax-table-row.view';

export default function CarfaxTableRowContainer({navigation, ...props}) {
  const handleView = (link) => {
    // console.log("aaaaaa");
    window.open(link, '_blank');
  }

  return (
    <CarfaxTableRowView
      {...props}
      onView={handleView}
    />
  );
}
