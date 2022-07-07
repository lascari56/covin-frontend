import React from 'react'

import LotsMenuItem from "./components/item"

import * as S from './lots-menu.styled'

export default function LotsMenuView() {
  return (
    <S.Container>
      <LotsMenuItem active title="Lot Finder" />

      <LotsMenuItem title="Buy Now Tracking" />

      <LotsMenuItem title="Templates" />

      <LotsMenuItem title="Bookmarks" />

      <LotsMenuItem title="Notification settings" />
    </S.Container>
  )
}
