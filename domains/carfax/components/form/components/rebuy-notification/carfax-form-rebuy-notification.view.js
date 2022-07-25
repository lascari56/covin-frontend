import React from 'react';

import * as S from "./carfax-form-rebuy-notification.styled"

const CarfaxFormRebuyNotificationView = ({onCancel, onConfirm}) => {
  return (
    <S.Container>
      <S.Message>Do you want to buy the report again?</S.Message>

      <S.Action>
        <S.Button title="No" size="small" theme="red" onClick={onCancel} />
        <S.Button title="Yes" size="small" theme="green" onClick={onConfirm} />
      </S.Action>
    </S.Container>
  );
}

export default CarfaxFormRebuyNotificationView;
