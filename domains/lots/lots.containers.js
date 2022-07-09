import React from 'react';

import LotsView from './lots.view';

import {useLots} from "@hooks/useLots"

export default function СontactsContainer({navigation, ...props}) {
  const lots = useLots({ isInitialLoad: true })

  return (
    <LotsView
      {...props}
      lots={lots}
    />
  );
}
