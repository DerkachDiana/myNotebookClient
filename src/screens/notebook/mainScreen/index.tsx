import React from 'react';
import { Text } from 'react-native';

import Background from '../../../components/Background';

import { Colors } from '../../../constants/colors';
import { TemplateType } from '../../../constants/templateType';

const Main = () => {
  return (
    <Background templateType={TemplateType.LIGHT} backgroundColor={Colors.DARKBLUE}>
      <Text>Hi</Text>
    </Background>
  );
};

export default Main;
