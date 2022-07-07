import React, { useState } from 'react';

import TemplatesView from "./templates.view"

const TemplatesContainer = ({...props}) => {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <TemplatesView {...props} selectedId={selectedId} onChangeSelectedId={setSelectedId} />
  );
}

export default TemplatesContainer;
