import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';

import { Colors } from '../constants/colors';
import { TemplateType } from '../constants/templateType';

import { BackgroundColor } from './styles';

const lightBackground = require('../assets/backgroundTemplates/template-for-dark.png');
const darkBackground = require( '../assets/backgroundTemplates/template-for-light.png');

interface BackgroundProps {
  backgroundColor:  Colors,
  templateType: TemplateType
  children: React.ReactNode
}

const Background = ({ backgroundColor, templateType, children }: BackgroundProps) => {
  const height = Dimensions.get('window').height;
  const backgroundTemplate = () => {
    return templateType === TemplateType.LIGHT ?
      lightBackground
      : darkBackground;
  };

  return (
    <BackgroundColor color={backgroundColor} height={height}>
      <ImageBackground source={ backgroundTemplate() } resizeMode={'cover'} style={{ height: height }}>
        {children}
      </ImageBackground>
    </BackgroundColor>

  );
};

export default Background;
