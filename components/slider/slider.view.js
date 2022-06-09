import React, { createRef, useEffect } from 'react'

import Splide from '@splidejs/splide';

import * as S from "./slider.styled"

import { responsiveSize } from "@utils/responsive";

export default function SliderView({options, items, renderItem, ItemComponent}) {
  const sliderRef = createRef();

  useEffect(() => {
    const spliderEl = new Splide(sliderRef.current, {
      autoWidth: false,
      gap: 6,
      pagination: false,
      swipeDistanceThreshold: 50,
      padding: responsiveSize(20),
      ...options,
    }).mount();

    return () => {
      spliderEl.destroy()
    }
  }, [])

  return (
    <div className="splide" ref={sliderRef}>
      <div className="splide__track">
        <ul className="splide__list">
          {items?.map((item, index) => (
            <li className="splide__slide" key={index}>
              <ItemComponent data={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">Prev</button>
        <button className="splide__arrow splide__arrow--next">Next</button>
      </div>
    </div>
  )
}
