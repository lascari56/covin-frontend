import React from 'react';

import * as S from "./tracking-create-step.styled"

const TrackingCreateStepView = ({children, title, number, active, next, last}) => {
  return (
    <S.Container>
      <S.Header>
        <S.Number active={active} next={next}>
          <S.NumberValue active={active} next={next}>{number}</S.NumberValue>
        </S.Number>

        <S.Title active={active} next={next}>{title}</S.Title>
      </S.Header>

      {active && (
        <S.Content last={last}>{children}</S.Content>
      )}
    </S.Container>
  );
}

export default TrackingCreateStepView;
