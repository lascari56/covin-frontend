import React from 'react';

import * as S from "./cabinet-photos-modal.styled"

const CabinetPhotosModalView = ({ items, onRequestClose }) => {
  return (
    <S.Modal isOpen={!!items?.length} onRequestClose={() => alert("Hello")}>
      <S.Container>
        {items?.map((item, index) => (
          <S.Image src={item} alt="image" key={index} />
        ))}
      </S.Container>
    </S.Modal>
  );
}

export default CabinetPhotosModalView;
