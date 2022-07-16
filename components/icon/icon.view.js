import PropTypes from 'prop-types';

import React, {useMemo} from 'react';

import * as S from "./icon.styled"

import {icons} from './icon.config';

const Icon = ({className, name, icon, size, width, height, onPress, ...props}) => {
  const IconComponent = useMemo(() => {
    return icon || icons[name];
  }, [name, icon]);

  return (
    <S.Container className={className} size={size} width={width} height={height}>
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
