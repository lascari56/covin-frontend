import React, { useState, useEffect } from 'react';

import TemplatesView from "./templates.view"

import {useLots} from "@hooks/useLots"
import {useTemplates} from "@hooks/useTemplates"

const TemplatesContainer = ({...props}) => {
  const lots = useLots()
  const templates = useTemplates({entry: "templates", onFilter: lots.onFilter})

  return (
    <TemplatesView
      {...props}
      lots={lots}
      templates={templates}
    />
  );
}

export default TemplatesContainer;
