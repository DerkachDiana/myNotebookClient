import React, { useState } from 'react';

import { Icons } from '../../../assets/Icons';
import { Colors } from '../../../constants/colors';

import { InputFrame, TextInputStyle } from './styles';

const NotebookNameInput = () => {
  const [notebookName, setNotebookName] = useState();

  return (
    <InputFrame source={Icons.inputFrame} resizeMode={'cover'}>
      <TextInputStyle
        value={notebookName}
        onChangeText={setNotebookName}
        placeholder={'Write Notebook name'}
        placeholderTextColor={Colors.LIGHTGOLD}
      />
    </InputFrame>
  );
};

export default NotebookNameInput;
