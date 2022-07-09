import React, { useState, useEffect } from 'react';

import TemplatesView from "./templates.view"

import {useLots} from "@hooks/useLots"

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

const TemplatesContainer = ({...props}) => {
  const [selectedId, setSelectedId] = useState(null)

  const lots = useLots()

  useEffect(() => {
    if (selectedId) {
      const filters = find(templates, {_id: selectedId})?.filters;

      lots?.onFilter(filters)
    }
  }, [selectedId])

  return (
    <TemplatesView
      {...props}
      selectedId={selectedId}
      templates={templates}
      lots={lots}
      onChangeSelectedId={setSelectedId}
    />
  );
}

export default TemplatesContainer;
