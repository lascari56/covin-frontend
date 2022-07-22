import React, {useState} from 'react';

import LotCardСommentaryView from "./lot-card-commentary.view"

const LotCardСommentaryContainer = ({value, ...props}) => {
  const [localValue, setLocalValue] = useState(value);

  return (
    <LotCardСommentaryView 
      {...props}
      value={localValue}
      onChangeValue={setLocalValue}
    />
  );
}

export default LotCardСommentaryContainer;
