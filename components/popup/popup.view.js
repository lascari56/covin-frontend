import { Popup } from 'components';
import React, { useEffect, useRef } from 'react';

import * as S from "./popup.styled"

const PopupView = ({className, children, title, paddingHorizontal, FooterComponent, onClose}) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose && onClose();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClose ]);

  return (
    <S.Container ref={ref} className={className}>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>

      <S.Content pHorizontal={paddingHorizontal}>
        {children}
      </S.Content>

      {!!FooterComponent && (
        <S.Footer>
          {FooterComponent}
        </S.Footer>
      )}
    </S.Container>
  );
}

PopupView.defaultProps = {
  paddingHorizontal: 20
}

export default PopupView;
