import React from 'react'

// import {Empty} from "@components"

import LayoutLots from "@layouts/lots"

// import TemplatesFilters from "./components/filters"

export default function BookmarksView({templates, lots}) {
  return (
    <LayoutLots 
      {...lots}
      LeftComponent={
        <p></p>
        // <TemplatesFilters {...templates} />
      }
    />
  )
}
