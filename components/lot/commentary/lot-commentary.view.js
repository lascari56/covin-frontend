import React from 'react';

import Button from "@components/button"
import Popup from "@components/popup"

import * as S from "./lot-commentary.styled"

const LotCommentaryView = ({onClose}) => {
  return (
    <Popup 
      title="Send commentary"
      FooterComponent={<Button title="Save" size="small" />}
      onClose={onClose}
    >
     
    </Popup>
  );
}

export default LotCommentaryView;
