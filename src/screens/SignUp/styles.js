import React from 'react';
import styled from 'styled-components/native';
 
export const Container = styled.SafeAreaView`
  background-color: #63C2D1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;
export const CustomButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #268596;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 14px;
  color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
  font-size: 11px;
  color: #268596;
`;
export const SignMessageButtonTextBold = styled.Text`
  font-size: 12px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;

