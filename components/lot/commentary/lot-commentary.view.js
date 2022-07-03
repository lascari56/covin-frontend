import React from 'react';

import Button from "@components/button"
import Popup from "@components/popup"

import {FormInput} from "@components/form"

import * as S from "./lot-commentary.styled"

const LotCommentaryView = ({onClose}) => {
  return (
    <Popup 
      title="Send commentary"
      FooterComponent={<Button title="Send" size="small" />}
      onClose={onClose}
    >
     <FormInput placeholder="Enter commentary" />
    </Popup>
  );
}

export default LotCommentaryView;
