import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  background: rgba(255, 255, 255, 0.2);
  width: 100px;
  height: 100px;
  justify-content: space-between;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
`;

export const TabText = styled.Text`
  color: #fff;
  font-size: 13px;
`;
