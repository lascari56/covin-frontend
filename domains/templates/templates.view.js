import React from 'react'

// import { CabinetPage } from "@components/cabinet";

import LayoutLots from "@layouts/lots"

import TemplatesFilters from "./components/filters"

export default function TemplatesView() {
  return (
    <LayoutLots LeftComponent={<TemplatesFilters />}>
    </LayoutLots>
  )
}
