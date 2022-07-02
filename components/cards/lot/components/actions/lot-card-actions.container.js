import React, {useState} from 'react';

import LotCardActionsView from "./lot-card-actions.view"

const LotCardActionsContainer = ({...props}) => {
  const [showNotification, setShowNotification] = useState(false);
  const [showCommentary, setShowCommentary] = useState(false);

  return (
    <LotCardActionsView 
      {...props}
      showNotification={showNotification}
      showCommentary={showCommentary}
      onChangeShowNotification={setShowNotification}
      onChangeShowCommentary={setShowCommentary}
    />
  );
}

export default LotCardActionsContainer;
