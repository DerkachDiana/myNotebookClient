import React, { FC, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { login, registration } from '../../api/userAPI';

import Background from '../../components/background/Background';
import Title from '../../components/title/Title';

import { Icons } from '../../assets/Icons';
import { Colors } from '../../constants/colors';
import { TemplateType } from '../../constants/templateType';
import { StackParams, UserType } from '../../types/types';

import { ButtonText, LoginFrame, LoginInput, SignInButton, SignUpButton } from './styles';

const Login: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] =useState<string | undefined>();
  const [user, setUser] = useState<UserType | undefined>();

  const signIn = async (): Promise<void> => {
    const userData = await login(email, password);
    if (userData) {
      setUser(userData);
      navigation.navigate('Main');
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

export default Login;
