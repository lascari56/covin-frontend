import React from "react";

import LotCardHeader from './components/header'
import LotCardActions from './components/actions'
import LotCardInfo from './components/info'
import LotCardCommentary from './components/commentary'


import * as S from "./lot-card.styled";

import {meta} from "./lot-card.data"

const LotCardView = ({ className, data }) => {
  return (
   <S.Container className={className}>
     <LotCardHeader data={data} />

      <S.Body type={data?.type}>
        <S.Content>
          
          <S.Slider data={data} />

          <S.Wrapper>
            {meta.map((item, index) => (
              <S.Column key={index}>
                <LotCardInfo data={data} options={item} />
              </S.Column>
            ))}

            <S.Column>
              <S.ActionButton theme="outline" title="Open Lot" />

              <S.ActionButton title="Buy Carfax" />
            </S.Column>

            <S.Column>
              <S.Meta type={data?.type} label="Current Bid" value={`${data?.price_new} $`} />

              <S.Meta type={data?.type} label="Reserve" value={`${data?.cost_priced} $`} />
            </S.Column>
          </S.Wrapper>

        </S.Content>
        
        <LotCardActions/>
      </S.Body>
      
      {data?.commentary && <LotCardCommentary />}
   </S.Container>
  );
};

export default LotCardView;
