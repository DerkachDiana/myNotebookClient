import React from 'react';

import { Colors } from '../../constants/colors';
import { TemplateType } from '../../constants/templateType';

import { BackgroundColor, MyImg } from './styles';

const lightBackground = require('../../assets/backgroundTemplates/template-for-dark.png');
const darkBackground = require( '../../assets/backgroundTemplates/template-for-light.png');

interface BackgroundProps {
  backgroundColor:  Colors,
  templateType: TemplateType
  children: React.ReactNode
}

const Background = ({ backgroundColor, templateType, children }: BackgroundProps) => {
  const backgroundTemplate = () => {
    return templateType === TemplateType.LIGHT ?
      lightBackground
      : darkBackground;
  };

  return (
    <BackgroundColor color={backgroundColor}>
      <MyImg source={backgroundTemplate()} resizeMode={'cover'}>
        {children}
      </MyImg>
    </BackgroundColor>
  );
};

export default Background;
