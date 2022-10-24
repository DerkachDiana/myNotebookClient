import React from 'react';

import Background from '../../components/background/Background';
import Title from '../../components/title/Title';

import { Icons } from '../../assets/Icons';
import { Colors } from '../../constants/colors';
import { TemplateType } from '../../constants/templateType';

import { LoginFrame, LoginInput, SignInButton, SignInButtonText,SignUpButton, SignUpButtonText } from './styles';

export const Login = () => {
  return (
    <Background backgroundColor={Colors.DARKBLUE} templateType={TemplateType.LIGHT}>
      <LoginFrame source={Icons.loginFrame}>
        <Title text={'Login'} color={Colors.LIGHTGOLD}/>
        <LoginInput placeholder={'Login'} maxLength={40} placeholderTextColor={Colors.GOLD}/>
        <LoginInput placeholder={'Password'} placeholderTextColor={Colors.GOLD} secureTextEntry={true}/>
        <SignInButton>
          <SignInButtonText>Sign in</SignInButtonText>
        </SignInButton>
        <SignUpButton>
          <SignUpButtonText>Sign up</SignUpButtonText>
        </SignUpButton>
      </LoginFrame>
    </Background>
  );
};
