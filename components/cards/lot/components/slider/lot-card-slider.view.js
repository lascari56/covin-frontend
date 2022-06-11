import React, { createRef, useEffect, useMemo } from 'react'

import * as S from './lot-card-slider.styled'

import Splide from '@splidejs/splide';

// const items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}]

export default function LotCardSliderМiew({className, data}) {
  const sliderRef = createRef();

  // const items = useMemo(() => {
  //   return data?.link_img_hd[0].split(";;");
  // }, []);

  useEffect(() => {
    const spliderEl = new Splide(sliderRef.current, {
      perPage: 5,
      rewind : true,
      gap: 6,
      pagination: false,
      swipeDistanceThreshold: 50,
    }).mount();

    return () => {
      spliderEl.destroy()
    }
  }, [])

  return (
    <S.Container className={className}>
      <div className="splide" ref={sliderRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {data?.link_img_hd?.map((item, index) => (
              <li className="splide__slide" key={index}>
                <S.Image image={item} />
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

      <S.View360 src="/images/360.svg" />
    </S.Container>
  )
}
