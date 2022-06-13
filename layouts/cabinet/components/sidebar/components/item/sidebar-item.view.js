import React from 'react'

import {Icon} from "@components"

import Link from 'next/link'

import * as S from './sidebar-item.styled'

export default function SidebarItemView({data, theme, full, active}) {
  return (
    <Link href={data.route} passHref>
      <S.Container full={full} active={active}>
        {!!data?.icon && <Icon name={data?.icon} size={24} />}

        <S.Title theme={theme} full={full}>{data?.title}</S.Title>

        <S.Indicator active={active} />
      </S.Container>
    </Link>
  )
}
