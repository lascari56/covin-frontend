import React, {useState} from 'react'

import FilterGroupView from "./filter-group.view"

export default function FilterGroupContainer({initialShow, ...props}) {
  const [show, setShow] = useState(!!initialShow)

  return (
    <FilterGroupView {...props} show={show} onChange={setShow} />
  )
}
