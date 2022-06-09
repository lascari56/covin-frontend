import React from 'react'

import CabinetMenuItem from "./components/item"

import * as S from './cabinet-menu.styled'

export default function CabinetMenuView() {
  return (
    <S.Container>
      <CabinetMenuItem active title="Lot Finder" />

      <CabinetMenuItem title="Buy Now Tracking" />

      <CabinetMenuItem title="Templates" />

      <CabinetMenuItem title="Bookmarks" />

      <CabinetMenuItem title="Notification settings" />
    </S.Container>
  )
}
