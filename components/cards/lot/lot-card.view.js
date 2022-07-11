import React from "react";

import LotCardHeader from './components/header'
import LotCardActions from './components/actions'
import LotCardInfo from './components/info'
import LotCardCommentary from './components/commentary'
import LotCardSlider from './components/slider'

import * as S from "./lot-card.styled";

const LotCardView = ({ className, data, type, renderMeta, links, onFull }) => {
  return (
   <S.Container className={className}>
     <LotCardHeader data={data} onFull={onFull} />

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
              
              {!!data?.price_future && <S.Meta type={data?.type} label="Reserve" value={data?.price_future ? `${data?.price_future} $` : "-"} />}
            </S.Column>
          </S.Wrapper>

        </S.Content>
        
        <LotCardActions type={type} />
      </S.Body>
      
      {!!data?.commentary && <LotCardCommentary />}
   </S.Container>
  );
};

export default LotCardView;
