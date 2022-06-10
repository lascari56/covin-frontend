import React from 'react'

import CabinetMenuItem from "./components/item"

import * as S from './cabinet-menu.styled'

const items = [
  {label: "Lot Finder", value: "lots"},
  {label: "Buy Now Tracking", value: "tracking"},
  {label: "Templates", value: "templates"},
  {label: "Bookmarks", value: "bookmarks"},
  {label: "Notification settings", value: "settings"},
]

export default function CabinetMenuView({active}) {
  return (
    <S.Container>
      {items?.map(item => (
        <CabinetMenuItem active={active === item.value} title={item.label} key={item.value} />
      ))}
    </S.Container>
  )
}
