import React from 'react';

import Background from '../../../components/background/Background';

import { Colors } from '../../../constants/colors';
import { TemplateType } from '../../../constants/templateType';
import { TextType } from '../../../constants/textType';
import { TextStyle } from '../../../constants/textType/styles';

import NotebookNameInput from './notebookNameInput';

const AddNotebookModal = () => {
  return (
    <Background backgroundColor={Colors.DARKBLUE} templateType={TemplateType.LIGHT}>
      <TextStyle textType={TextType.title}>Add new notebook</TextStyle>
      <TextStyle textType={TextType.heading}>Write Notebook's name</TextStyle>
      <NotebookNameInput/>
    </Background>
  );
};

export default AddNotebookModal;
