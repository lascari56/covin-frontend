import React from 'react';

import {Button} from "@components"
import {FormCheckbox, FormSelect} from "@components/form"

import {FormCheckboxItem} from "@components/form/checkbox"

import * as S from "./notication-card.styled"

const appearOptions = [
  {label: "“Buy Now” will appear", value: "buy-now"},
  {label: "Auction date will appear", value: "auction"},
]

const timeOptions = [
  {label: "15 min", value: 15},
  {label: "25 min", value: 25},
  {label: "40 min", value: 40},
]

const NoticationCardView = ({className}) => {
  return (
    <S.Container className={className}>
      <S.Header>
        <S.Title>Send notification if:</S.Title>
      </S.Header>

      <S.Content>
        <FormCheckbox value={["auction"]} options={appearOptions} onChange={() => {}} />

        <S.Group>
          <FormCheckboxItem
            label="before the auction start"
            LeftComponent={
              <FormSelect
                options={timeOptions}
                onChange={() => {}}
              />
            }
          />
        </S.Group>
      </S.Content>

      <S.Footer>
        <Button title="Save" size="small" />
      </S.Footer>
    </S.Container>
  );
}

export default NoticationCardView;
