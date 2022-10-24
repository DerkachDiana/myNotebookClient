import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Colors } from '../../constants/colors';
import CoverWrapper from '../coverWrapper/coverWrapper';

import { NotebookName, NotebookWrapper } from './styles';

type NotebookContainerProps = {
    notebookName: string,
    cover: ImageSourcePropType
};

const NotebookContainer = ({ notebookName, cover }: NotebookContainerProps) => {
  return (
    <NotebookWrapper>
      <CoverWrapper cover={cover}/>
      <NotebookName color={Colors.LIGHTGOLD}>{notebookName}</NotebookName>
    </NotebookWrapper>
  );
};

export default NotebookContainer;
