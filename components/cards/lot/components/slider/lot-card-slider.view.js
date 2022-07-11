import React, { createRef, useEffect, useMemo } from 'react'

import * as S from './lot-card-slider.styled'

import Splide from '@splidejs/splide';

// import Zoom from 'react-medium-image-zoom'

export default function LotCardSliderМiew({className, data, items}) {
  const sliderRef = createRef();

  useEffect(() => {
    const spliderEl = new Splide(sliderRef.current, {
      perPage: 5,
      rewind : true,
      gap: 6,
      lazyLoad: "nearby",
      pagination: false,
      swipeDistanceThreshold: 50,
    }).mount();

    return () => {
      spliderEl.destroy()
    }
  }, [items])

  return (
    <S.Container className={className}>
      <div className="splide" ref={sliderRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {items?.map((item, index) => (
              <li className="splide__slide" key={index}>
                {/* <Zoom zoomMargin={100} overlayBgColorEnd="rgba(0, 0, 0, 0.4)" transitionDuration={400}> */}
                  <S.Image image={item} />
                {/* </Zoom> */}
              </li>
            ))}
          </ul>
        </div>

        <div className="splide__arrows">
          <S.Action type="left" className="splide__arrow splide__arrow--prev">
            <S.Arrow src="/images/arrow-left.svg"/>
          </S.Action> 
          
          <S.Action type="right" className="splide__arrow splide__arrow--next">
            <S.Arrow src="/images/arrow-right.svg"/>
          </S.Action>
        </div>
      </div>
      
      {!!data?.image_360 && (
        <S.Link360 href={data?.image_360} target="_blank">
          <S.Icon360 src="/images/360.svg" />
        </S.Link360>
      )}
    </S.Container>
  )
}
