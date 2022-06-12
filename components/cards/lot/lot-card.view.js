import React from "react";

import LotCardHeader from './components/header'
import LotCardActions from './components/actions'
import LotCardInfo from './components/info'
import LotCardCommentary from './components/commentary'
import LotCardSlider from './components/slider'

import * as S from "./lot-card.styled";

const LotCardView = ({ className, data, renderMeta, links }) => {
  return (
   <S.Container className={className}>
     <LotCardHeader data={data} />

      <S.Body type={data?.type}>
        <S.Content>
          
          <LotCardSlider data={data} />

          <S.Wrapper>
            {renderMeta.map((item, index) => (
              <S.Column key={index}>
                <LotCardInfo data={item} />
              </S.Column>
            ))}

            <S.Column>
              <S.ActionButton theme="outline" title="Open Lot" to={links?.lot_link} target="_blank" />

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
