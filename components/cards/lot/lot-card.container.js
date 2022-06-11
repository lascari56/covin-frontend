import React, {useEffect} from 'react';

import LotCardView from './lot-card.view';

export default function LotCardContainer({...props}) {
  const renderItems = useEffect(() => {

  }, []);

  return (
    <LotCardView
      {...props}
    />
  );
}
