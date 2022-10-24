import React from 'react';
import { Image } from 'react-native';

import Background from '../../../components/background/Background';
import NotebookContainer from '../../../components/noteboookContainer';
import Title from '../../../components/title/Title';

import { Icons } from '../../../assets/Icons';
import { Colors } from '../../../constants/colors';
import { TemplateType } from '../../../constants/templateType';

import { AddButtonIcon, ColorWheelIcon, HeaderContainer, HeaderNotebooksContainer } from './styles';

const Main = () => {
  return (
    <Background templateType={TemplateType.LIGHT} backgroundColor={Colors.DARKBLUE}>
      <HeaderNotebooksContainer>
        <HeaderContainer>
          <Title text={'Notebooks'} color={Colors.LIGHTGOLD}/>
          <ColorWheelIcon source={Icons.colorWheel} />
        </HeaderContainer>
        <NotebookContainer
          notebookName={'Diary'}
          cover={require('../../../assets/mockCovers/pink-cover.png')}
        />
      </HeaderNotebooksContainer>
      <AddButtonIcon source={Icons.addButton}/>
    </Background>
  );
};

export default Main;
