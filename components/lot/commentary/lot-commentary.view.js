import React from 'react';

import Button from "@components/button"
import Popup from "@components/popup"

import {FormInput} from "@components/form"

const LotCommentaryView = ({formik, onClose}) => {
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
