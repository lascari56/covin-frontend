import React from 'react'

import {CabinetCard} from "@components/cabinet"

import PaymentsSubscriptionType from './components/type'

import * as S from './payments-subscription.styled'

export default function PaymentsSubscriptionView({className}) {
  return (
    <CabinetCard className={className} title="My subscription" icon="/images/payments2.svg">
      <PaymentsSubscriptionType/>

      <S.Footer>
        <S.Action title="Upgrade to Premium" />

        <S.Action title="More info" theme="violet" />
      </S.Footer>
    </CabinetCard>
  )
}
