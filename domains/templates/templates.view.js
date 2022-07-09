import React from 'react'

import {Empty} from "@components"

import LayoutLots from "@layouts/lots"

import TemplatesFilters from "./components/filters"

export default function TemplatesView({selectedId, templates, lots, onChangeSelectedId}) {
  return (
    <LayoutLots 
      {...lots}
      LeftComponent={
        <TemplatesFilters
          items={templates}
          value={selectedId}
          onChange={onChangeSelectedId}
        />
      }
    >
      {!lots?.loading && !lots?.data?.length && <Empty title="Not chosen" description="Choose a template for viewing lots" />}
    </LayoutLots>
  )
}
