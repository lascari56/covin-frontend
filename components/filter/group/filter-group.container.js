import React, {useState, useEffect} from 'react'

import FilterGroupView from "./filter-group.view"

export default function FilterGroupContainer({initialShow, onChangeShow, ...props}) {
  const [show, setShow] = useState(!!initialShow)

  const handleChangeShow = () => {
    if (props.disabled !== true) {
      setShow(!show)
      onChangeShow && onChangeShow(!show)
    }
  }
  
  return (
    <FilterGroupView {...props} show={show} onChangeShow={handleChangeShow} />
  )
}
