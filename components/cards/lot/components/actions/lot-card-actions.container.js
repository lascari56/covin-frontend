import React, {useState} from 'react';

import LotCardActionsView from "./lot-card-actions.view"

const LotCardActionsContainer = ({...props}) => {
  const [showNotification, setShowNotification] = useState(false)

  return (
    <LotCardActionsView {...props} showNotification={showNotification} onChangeShowNotification={setShowNotification} />
  );
}

export default LotCardActionsContainer;
