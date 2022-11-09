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
  font-family: 'playfair_display_regular';
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

export const ButtonText = styled.Text`
  color:  ${(props) => props.color}
  font-family: 'playfair_display_regular';
`;

export const ErrorWindowStyle = styled.View`
  background-color: ${Colors.WHITE};
  margin-top: 10px;
  padding: 10px;
  border-color: ${Colors.RED};
  border-radius: 10px;
  border-width: 3px;
  width: 100%;
  height: 50px;
`;

export const TextError = styled.Text`
  text-align: center;
  color: ${Colors.RED};
  font-family: 'playfair_display_regular';
`;

export const ErrorLogin = styled.TextInput`
  border-color: ${Colors.RED};
  border-radius: 10px;
  border-width: 3px;
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  background-color: ${Colors.WHITE};
  margin-top: 6px;
  font-size: 15px;
  color: ${Colors.RED}
  font-family: 'playfair_display_regular';
`;
