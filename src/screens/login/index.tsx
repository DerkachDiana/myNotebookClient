import React, { FC, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as EmailValidator from 'email-validator';

import { login, registration } from '../../api/userAPI';

import Background from '../../components/background/Background';
import { ErrorWindow } from './components/errorWindow';

import { ERROR_MESSAGE } from '../../../errors/errors';
import { Icons } from '../../assets/Icons';
import { Colors } from '../../constants/colors';
import { TemplateType } from '../../constants/templateType';
import Text from '../../constants/text';
import { TextType } from '../../constants/textType';
import { TextStyle } from '../../constants/textType/styles';
import { userStore } from '../../stores/UserStore';
import { StackParams } from '../../types/types';

import { ButtonText, ErrorLogin, LoginFrame, LoginInput, SignInButton, SignUpButton } from './styles';

const Login: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] =useState<string | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const signIn = async (): Promise<void> => {
    try {
      setErrorMessage(undefined);
      const userData = await login(email, password);
      userStore.setUser(userData);
      navigation.navigate('Main');
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE[e as number]);
    }
  };

  const signUp = async (): Promise<void> => {
    if (!EmailValidator.validate(email)) {
      setErrorMessage(Text.errors.notValidEmail);

      return;
    }
    try {
      setErrorMessage(undefined);
      const userData = await registration(email, password);
      userStore.setUser(userData);
      navigation.navigate('Main');
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE[e as number]);
    }
  };

  const renderLogin = () => {
    const Input = errorMessage ? ErrorLogin : LoginInput;

    return (
      <>
        <Input
          placeholder={'Email'}
          maxLength={40}
          placeholderTextColor={Colors.WHITE}
          onChangeText={setEmail}
          value={email}
        />
        <Input
          placeholder={'Password'}
          placeholderTextColor={Colors.WHITE}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </>
    );
  };

  return (
    <Background backgroundColor={Colors.DARKBLUE} templateType={TemplateType.LIGHT}>
      <TextStyle textType={TextType.title}>Login</TextStyle>
      <LoginFrame source={Icons.loginFrame}>
        {renderLogin()}
        <SignInButton onPress={signIn}>
          <ButtonText color={Colors.DARKBLUE}>Sign in</ButtonText>
        </SignInButton>
        <SignUpButton onPress={signUp}>
          <ButtonText color={Colors.LIGHTGOLD}>Sign up</ButtonText>
        </SignUpButton>
        {errorMessage && <ErrorWindow message={errorMessage}/>}
      </LoginFrame>
    </Background>
  );
};

export default Login;
