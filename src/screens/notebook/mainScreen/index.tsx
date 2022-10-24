import React from 'react';
import { Image } from 'react-native';

import Background from '../../../components/background/Background';
import Title from '../../../components/title/Title';

import { Icons } from '../../../assets/Icons';
import { Colors } from '../../../constants/colors';
import { TemplateType } from '../../../constants/templateType';

import { HeaderContainer } from './styles';

const Main = () => {
  return (
    <Background templateType={TemplateType.LIGHT} backgroundColor={Colors.DARKBLUE}>
      <HeaderContainer>
        <Title text={'Notebooks'} color={Colors.LIGHTGOLD}/>
        <Image source={Icons.colorWheel}/>
      </HeaderContainer>
    </Background>
  );
};

export default Main;
