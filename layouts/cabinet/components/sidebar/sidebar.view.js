import React from 'react'

import Item from './components/item'

import * as S from './sidebar.styled'

import {sections} from "./sidebar.data"

export default function SidebarView({className, full, activeRoute}) {
  return (
    <S.Container full={full} className={className}>
      {sections?.map((section, sectionIndex) => (
        <S.Group key={section.id}>
          {section.items.map(item => (
            <Item theme={section.theme} full={full} active={item.route === activeRoute} data={item} key={item.key}/>
          ))}

          {sectionIndex < sections?.length - 1 && <S.Line/>}
        </S.Group>
      ))}
    </S.Container>
  )
}
