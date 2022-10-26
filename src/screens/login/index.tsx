import React, { FC, useState } from 'react';

import { login, registration } from '../../api/userAPI';

import Background from '../../components/background/Background';
import Title from '../../components/title/Title';

import { Icons } from '../../assets/Icons';
import { Colors } from '../../constants/colors';
import { TemplateType } from '../../constants/templateType';
import { UserType } from '../../types/types';

import { ButtonText, LoginFrame, LoginInput, SignInButton, SignUpButton } from './styles';

export const Login: FC = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] =useState<string | undefined>();
  const [user, setUser] = useState<UserType | undefined>();

  const signIn = async (): Promise<void> => {
    const userData = await login(email, password);
    if (userData) {
      setUser(userData);
    }
  };

  const signUp = async (): Promise<void> => {
    const userData = await registration(email, password);
    if (userData) {
      setUser(userData);
    }
  };

  return (
    <Background backgroundColor={Colors.DARKBLUE} templateType={TemplateType.LIGHT}>
      <LoginFrame source={Icons.loginFrame}>
        <Title text={'Login'} color={Colors.LIGHTGOLD}/>
        <LoginInput
          placeholder={'Email'}
          maxLength={40}
          placeholderTextColor={Colors.GOLD}
          onChangeText={setEmail}
          value={email}
        />
        <LoginInput
          placeholder={'Password'}
          placeholderTextColor={Colors.GOLD}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <SignInButton onPress={signIn}>
          <ButtonText color={Colors.DARKBLUE}>Sign in</ButtonText>
        </SignInButton>
        <SignUpButton onPress={signUp}>
          <ButtonText color={Colors.LIGHTGOLD}>Sign up</ButtonText>
        </SignUpButton>
      </LoginFrame>
    </Background>
  );
};
