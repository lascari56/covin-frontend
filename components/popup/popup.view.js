import React, { useEffect, useRef } from 'react';

import * as S from "./popup.styled"

const PopupView = ({className, children, title, FooterComponent, onClose}) => {
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

      <S.Content>
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

export default PopupView;
