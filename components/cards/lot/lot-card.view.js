import React from "react";

import LotCardHeader from './components/header'
import LotCardActions from './components/actions'
import LotCardInfo from './components/info'
import LotCardCommentary from './components/commentary'
import LotCardSlider from './components/slider'

import * as S from "./lot-card.styled";

const LotCardView = ({ className, data, type, renderMeta, links, onFull, onSubmitCommentary, onSubmitHidden, onSubmitBookmarks }) => {
  return (
   <S.Container className={className}>
     <LotCardHeader data={data} onFull={onFull} />

     {/* <p>{JSON.stringify(data)}</p> */}

      <S.Body isHidden={!!data?.hidden}>
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
              <S.Meta isHidden={!!data?.hidden} label="Current Bid" value={`${data?.price_new} $`} />
              
              {!!data?.price_future && <S.Meta isHidden={!!data?.hidden} label="Reserve" value={data?.price_future ? `${data?.price_future} $` : "-"} />}
            </S.Column>
          </S.Wrapper>

        </S.Content>
        
        <LotCardActions 
          data={data}
          type={type} 
          onSubmitCommentary={(form) => onSubmitCommentary({id: data?._id, form})}
          onSubmitHidden={() => onSubmitHidden({id: data?._id, itemId: data?.hidden?._id})}
          onSubmitBookmarks={() => onSubmitBookmarks({id: data?._id, itemId: data?.bookmark?._id})}
        />
      </S.Body>

      {!!data?.comment?.message && <LotCardCommentary value={data?.comment?.message} />}
   </S.Container>
  );
};

export default LotCardView;
