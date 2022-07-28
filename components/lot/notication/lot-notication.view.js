import React from 'react';

import Button from "@components/button"
import Popup from "@components/popup"
import {FormCheckbox, FormSelect} from "@components/form"

import {FormCheckboxItem} from "@components/form/checkbox"

import * as S from "./lot-notication.styled"

const appearOptions = [
  {label: "“Buy Now” will appear", value: "buy-now"},
  {label: "Auction date will appear", value: "auction"},
]

const timeOptions = [
  {label: "15 min", value: 15},
  {label: "25 min", value: 25},
  {label: "40 min", value: 40},
]

const LotNoticationView = ({formik, onClose}) => {
  return (
    <Popup 
      title="Send notification if:"
      paddingHorizontal={5.5}
      FooterComponent={<Button title="Save" size="small" onClick={formik.handleSubmit} />}
      onClose={onClose}
    >
      <FormCheckbox
        value={formik.values.type}
        options={appearOptions}
        onChange={value => formik.setFieldValue('type', value)}
      />

      <S.Content>
        <FormCheckboxItem
          label="before the auction start"
          LeftComponent={
            <FormSelect
              value={formik.values.time}
              options={timeOptions}
              onChange={value => formik.setFieldValue('time', value)}
            />
          }
        />
      </S.Content>
    </Popup>
  );
}

export default LotNoticationView;
