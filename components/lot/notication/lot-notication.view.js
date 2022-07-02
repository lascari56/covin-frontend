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

const LotNoticationView = ({onClose}) => {
  return (
    <Popup 
      title="Send notification if:"
      FooterComponent={<Button title="Save" size="small" />}
      onClose={onClose}
    >
      <FormCheckbox value={["auction"]} options={appearOptions} onChange={() => {}} />

      <S.Content>
        <FormCheckboxItem
          label="before the auction start"
          LeftComponent={
            <FormSelect
              options={timeOptions}
              onChange={() => {}}
            />
          }
        />
      </S.Content>
    </Popup>
  );
}

export default LotNoticationView;
