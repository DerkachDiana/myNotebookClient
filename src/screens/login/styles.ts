import styled from 'styled-components/native';

import { Colors } from '../../constants/colors';

export const LoginFrame = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  background-size: cover;
  width: 322px;
  height: 295px;
  padding-left: 30px;
  padding-top: 30px;
  padding-right: 30px;
`;

export const LoginInput = styled.TextInput`
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  background-color: ${Colors.OPACITYWHITE};
  border-radius: 5px;
  margin-top: 10px;
  font-size: 15px;
  color: ${Colors.LIGHTGOLD}
`;

export const SignInButton = styled.TouchableOpacity`
  padding: 5px 45px;
  border-radius: 20px;
  background-color: ${Colors.LIGHTGOLD};
  margin-top: 10px;
`;

export const SignUpButton = styled.TouchableOpacity`
  padding: 5px 43px;
  border-radius: 20px;
  border-color: ${Colors.LIGHTGOLD};
  border-width: 1px;
  margin-top: 10px;
`;

export const SignUpButtonText = styled.Text`
  color:  ${Colors.LIGHTGOLD}
`;

export const SignInButtonText = styled.Text`
  color: ${Colors.DARKBLUE}
`;

