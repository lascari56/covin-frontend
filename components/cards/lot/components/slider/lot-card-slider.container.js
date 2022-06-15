import React, { useMemo } from 'react';

import LotCardSliderView from "./lot-card-slider.view"

const LotCardSliderContainer = ({...props}) => {
  const items = useMemo(() => {
    if (props?.data?.link_img_hd) {
      return props?.data?.link_img_hd?.map(item => {
        if (props?.data.site === "1") {
          return item?.replace("hrs", "ful")
        } else {
          return `${item?.split("&")[0]}&width=338&height=250`
        }
      })
    }

    return []
  }, [props?.data?.link_img_hd, props?.data.site])

  return <LotCardSliderView {...props} items={items} />
}

export default LotCardSliderContainer;
