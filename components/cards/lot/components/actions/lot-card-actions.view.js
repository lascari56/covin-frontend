import React from 'react'

import LotCardActionsItem from "./components/item"

import {LotNotification, LotCommentary} from "@components/lot"

import * as S from './lot-card-actions.styled'

import FavoriteSVG from "./images/favorite"
import CommentSVG from "./images/сomment"
import HideSVG from "./images/hide"
import NotificationVG from "./images/notification"

export default function LotCardActionsView({showNotification, showCommentary, type, onChangeShowNotification, onChangeShowCommentary}) {
  return (
    <S.Container>
      <S.Item >
        <LotCardActionsItem icon={FavoriteSVG} />
      </S.Item>

      <S.Item>
        <LotCardActionsItem icon={CommentSVG} onClick={() => onChangeShowCommentary(!showCommentary)} />

        {!!showCommentary && (
          <S.Popup position="top">
            <LotCommentary onClose={() => onChangeShowCommentary(false)} />  
          </S.Popup>
        )}
      </S.Item>

      <S.Item>
        <LotCardActionsItem icon={HideSVG} />
      </S.Item>
      
      {type !== "buy-now" && (
        <S.Item>
          <LotCardActionsItem icon={NotificationVG} onClick={() => onChangeShowNotification(!showNotification)} />

          {!!showNotification && (
            <S.Popup position="bottom">
              <LotNotification onClose={() => onChangeShowNotification(false)} />  
            </S.Popup>
          )}
        </S.Item>
      )}
    </S.Container>
  )
}
