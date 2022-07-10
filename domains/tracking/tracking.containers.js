import React, { useState, useEffect } from 'react';

import TrackingView from "./tracking.view"

import {useLots} from "@hooks/useLots"
import {useTemplates} from "@hooks/useTemplates"

import {find} from "lodash"

const templates = [
  {
    "_id": 1,
    "filters": {
      "make": [
        "ACURA"
      ]
    },
    "name": "ACURA"
  },
  {
    "_id": 2,
    "filters": {
      "make": [
        "ALFA ROMEO",
      ]
    },
    "name": "ALFA ROMEO"
  }
]

const showOptions = [
  {label: "All", value: "all"},
  {label: "Notification lots", value: "notification_lots"},
  {label: "Commented lots", value: "commented_lots"},
  {label: "Hide lots", value: "hide_lots"},
  {label: "Purchased reports", value: "purchased_reports"},
]

const TrackingContainer = ({...props}) => {
  const lots = useLots({initialSort: "date_adding_new", showOptions})
  const templates = useTemplates({entry: "bynow-trackings", onFilter: lots.onFilter})

  return (
    <TrackingView
      {...props}
      lots={lots}
      templates={templates}
    />
  );
}

export default TrackingContainer;
