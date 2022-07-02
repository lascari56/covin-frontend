import React from 'react';

import * as S from "./cabinet-photos-modal.styled"

const CabinetPhotosModalView = ({ items, onRequestClose }) => {
  return (
    <S.Modal isOpen={!!items?.length} onRequestClose={onRequestClose}>
      {items?.map((item, index) => (
        <S.Image url={item} key={index} />
      ))}
    </S.Modal>
  );
}

export default CabinetPhotosModalView;
