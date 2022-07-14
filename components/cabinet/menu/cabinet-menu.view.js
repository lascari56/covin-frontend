import React from 'react'

import CabinetMenuItem from "./components/item"

import * as S from './cabinet-menu.styled'

const items = [
  {label: "Lot Finder", value: "lots", route: "/cabinet/lots"},
  {label: "Buy Now Tracking", value: "tracking", route: "/cabinet/tracking"},
  {label: "Templates", value: "templates", route: "/cabinet/templates"},
  {label: "Bookmarks", value: "bookmarks", route: "/cabinet/bookmarks"},
  // {label: "Notification settings", value: "notification", route: "/cabinet/tracking/create"},
]

export default function CabinetMenuView({activeRoute}) {
  return (
    <S.Container>
      {items?.map(item => (
        <CabinetMenuItem active={item.route === activeRoute} data={item} key={item.value} />
      ))}
    </S.Container>
  )
}
