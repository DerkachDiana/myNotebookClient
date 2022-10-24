import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Cover, CoverBorder } from './styles';

type CoverWrapperProps = {
    cover: ImageSourcePropType
};

const CoverWrapper = ({ cover }: CoverWrapperProps) => {
  return (
    <CoverBorder>
      <Cover source={cover}/>
    </CoverBorder>
  );
};

export default CoverWrapper;
