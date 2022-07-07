import PropTypes from 'prop-types';

import React from 'react'

import ButtonView from "./button.view"

import { useRouter } from 'next/router'

function ButtonContainer({to, scroll, target, onClick, ...props}) {
  const router = useRouter()

  const handferClick = () => {
    if (to) {
      if (target === "_blank") {
        window.open (to, '_ blank')
      } else {
        // router.push(to, router.pathname, {scroll, target})

        router.push(to)
      }
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