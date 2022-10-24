import React from 'react';

import { Colors } from '../../constants/colors';

import { MainTitle } from './styles';

interface TitleProps {
  text: string
  color: Colors
}

const Title = ({ text, color }: TitleProps) => {
  return (
    <MainTitle color={ color }>
      { text }
    </MainTitle>
  );
};

export default Title;
