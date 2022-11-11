import styled from 'styled-components';

import { Colors } from '../../../constants/colors';
import { scaleHorizontal, scaleVertical } from '../../../utils/scaleUtils';

export const InputFrame = styled.ImageBackground`
  height: ${scaleVertical(110)};
  width: ${scaleHorizontal(400)};
  padding-top: 17px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const TextInputStyle = styled.TextInput`
  color: ${Colors.LIGHTGOLD}
`;
