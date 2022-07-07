import React from 'react'

import LayoutLots from "@layouts/lots"

import TemplatesFilters from "./components/filters"

export default function TemplatesView({selectedId, onChangeSelectedId}) {
  return (
    <LayoutLots LeftComponent={<TemplatesFilters value={selectedId} onChhange={onChangeSelectedId} />} />
  )
}
