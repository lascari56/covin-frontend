import PropTypes from 'prop-types';

import React, {useMemo} from 'react';

import * as S from "./icon.styled"

import {icons} from './icon.config';

const Icon = ({name, icon, size, onPress, ...props}) => {
  const IconComponent = useMemo(() => {
    return icons[name] || false;
  }, [name]);

  return (
    <S.Container size={size}>
      <IconComponent {...props} />
    </S.Container>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 12
};

export default Icon;
