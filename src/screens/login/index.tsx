import React from 'react';

import Background from '../../components/background/Background';
import Title from '../../components/title/Title';

import { Icons } from '../../assets/Icons';
import { Colors } from '../../constants/colors';
import { TemplateType } from '../../constants/templateType';

import { ButtonText, LoginFrame, LoginInput, SignInButton, SignUpButton } from './styles';

export const Login = () => {
  return (
    <Background backgroundColor={Colors.DARKBLUE} templateType={TemplateType.LIGHT}>
      <LoginFrame source={Icons.loginFrame}>
        <Title text={'Login'} color={Colors.LIGHTGOLD}/>
        <LoginInput placeholder={'Login'} maxLength={40} placeholderTextColor={Colors.GOLD}/>
        <LoginInput placeholder={'Password'} placeholderTextColor={Colors.GOLD} secureTextEntry={true}/>
        <SignInButton>
          <ButtonText color={Colors.DARKBLUE}>Sign in</ButtonText>
        </SignInButton>
        <SignUpButton>
          <ButtonText color={Colors.LIGHTGOLD}>Sign up</ButtonText>
        </SignUpButton>
      </LoginFrame>
    </Background>
  );
};
