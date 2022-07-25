import React, {useState, useEffect, useMemo} from 'react';

import CarfaxTableRowView from './carfax-table-row.view';

export default function CarfaxTableRowContainer({navigation, ...props}) {
  const status = useMemo(() => {
    return props?.data?.status;
  }, [props?.data?.status]);

  const handleView = (link) => {
    // console.log("aaaaaa");
    window.open(link, '_blank');
  }

  return (
    <CarfaxTableRowView
      {...props}
      status={status}
      onView={handleView}
    />
  );
}
