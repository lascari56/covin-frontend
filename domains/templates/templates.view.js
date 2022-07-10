import React from 'react'

import {Empty} from "@components"

import LayoutLots from "@layouts/lots"

import TemplatesFilters from "./components/filters"

export default function TemplatesView({templates, lots}) {
  return (
    <LayoutLots 
      {...lots}
      LeftComponent={
        <TemplatesFilters {...templates} />
      }
    >
      {!lots?.loading && !lots?.data?.length && <Empty title="Not chosen" description="Choose a template for viewing lots" />}
    </LayoutLots>
  )
}
