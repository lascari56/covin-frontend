import React, {useState} from 'react'

import FilterGroupView from "./filter-group.view"

export default function FilterGroupContainer({initialShow, ...props}) {
  const [show, setShow] = useState(!!initialShow)

  const handleChangeShow = () => {
    if (props.disabled !== true) {
      setShow(!show)
    }
  }

  return (
    <FilterGroupView {...props} show={show} onChangeShow={handleChangeShow} />
  )
}
