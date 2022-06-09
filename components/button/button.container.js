import PropTypes from 'prop-types';

import React from 'react'

import ButtonView from "./button.view"

import { useRouter } from 'next/router'

function ButtonContainer({to, scroll, onClick, ...props}) {
  const router = useRouter()

  const handferClick = () => {
    if (to) {
      router.push(to, router.pathname, {scroll})
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <ButtonView {...props} onClick={handferClick} />
  )
}

ButtonContainer.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonContainer.defaultProps = {
  scroll: true
}

export default ButtonContainer;