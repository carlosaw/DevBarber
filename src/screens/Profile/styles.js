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
  margin-top: 30px;
`;
export const CustomButtonText = styled.Text`
  font-size: 14px;
  color: #FFF;
`;