import React, { useState, useEffect } from 'react';

import TrackingView from "./tracking.view"

import {useLots} from "@hooks/useLots"
import {useTemplates} from "@hooks/useTemplates"

const showOptions = [
  {label: "All", value: "all"},
  {label: "Commented lots", value: "comments"},
  {label: "Hide lots", value: "hidden"},
  {label: "Purchased reports", value: "purchased_reports"},
]

const TrackingContainer = ({...props}) => {
  const lots = useLots({initialSort: "date_adding_new", showOptions})
  const templates = useTemplates({
    entry: "bynow-trackings",
    onFilter: lots.onFilter,
    initialFilters: {price_new: { $gt: 0 }}
  })

  return (
    <TrackingView
      {...props}
      lots={lots}
      templates={templates}
    />
  );
}

export default TrackingContainer;
