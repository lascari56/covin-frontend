import React from 'react'

import LotCardActionsItem from "./components/item"

import {LotNotification, LotCommentary} from "@components/lot"

import * as S from './lot-card-actions.styled'

import FavoriteSVG from "./images/favorite"
import FavoriteActiveSVG from "./images/favorite-active"
import CommentSVG from "./images/сomment"
import HideSVG from "./images/hide"
import HideActiveSVG from "./images/hide-active"
import NotificationSVG from "./images/notification"
import NotificationActiveSVG from "./images/notification-active"

export default function LotCardActionsView({data, showNotification, showCommentary, type, onChangeShowNotification, onChangeShowCommentary, onSubmitNotification, onSubmitCommentary, onSubmitHidden, onSubmitBookmarks}) {
  return (
    <S.Container>
      <S.Item >
        <LotCardActionsItem icon={data?.bookmark?._id ? FavoriteActiveSVG : FavoriteSVG} onClick={onSubmitBookmarks} />
      </S.Item>

      <S.Item>
        <LotCardActionsItem icon={CommentSVG} onClick={() => onChangeShowCommentary(!showCommentary)} />

        {!!showCommentary && (
          <S.Popup position="top">
            <LotCommentary value={data?.comment?.message} onClose={() => onChangeShowCommentary(false)} onSubmit={onSubmitCommentary} />  
          </S.Popup>
        )}
      </S.Item>

      <S.Item>
        <LotCardActionsItem icon={data?.hidden?._id ? HideActiveSVG : HideSVG} onClick={onSubmitHidden} />
      </S.Item>
      
      {type !== "buy-now" && (
        <S.Item>
          <LotCardActionsItem icon={NotificationSVG} onClick={() => onChangeShowNotification(!showNotification)} />

          {!!showNotification && (
            <S.Popup position="bottom">
              <LotNotification onClose={() => onChangeShowNotification(false)} onSubmit={onSubmitNotification} />  
            </S.Popup>
          )}
        </S.Item>
      )}
    </S.Container>
  )
}
