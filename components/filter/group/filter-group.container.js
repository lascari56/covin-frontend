import React, {useState} from 'react'

import FilterGroupView from "./filter-group.view"

export default function FilterGroupContainer({...props}) {
  const [show, setShow] = useState(false)

  return (
    <FilterGroupView {...props} show={show} onChange={setShow} />
  )
}
