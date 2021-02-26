import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import ExpandIcon from '../assets/expand.svg';
import NavPrevIcon from '../assets/nav_prev.svg';
import NavNextIcon from '../assets/nav_next.svg';

const Modal = styled.Modal``;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalBody = styled.View`
  background-color: #83D6E3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;
const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

const ModalItem = styled.View`
  background-color: #FFFFFF;
  border-radius: 10px;  
  margin-bottom: 15px;
  padding: 10px;
`;

const UserInfo = styled.View`
   flex-direction: row;
   align-items: center;
`;
const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;
const UserName = styled.Text`
  font-size: 15px;
  color: #000000;
  font-weight: bold;
`;

const ServiceInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ServiceName = styled.Text`
  font-size: 12px;
`;

const ServicePrice = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

const FinishButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const FinishButtontext = styled.Text`
  color: #FFFFFF;
  font-size: 13px;
  font-weight: bold;
`;

const DateInfo = styled.View`
  flex-direction: row;
`;
const DatePrevArea = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;
const DateTitleArea = styled.View`
  width: 160px;
  justify-content: center;
  align-items: center;
`;
const DateTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000000;
`;
const DateNextArea = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;


const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];
const days = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
]


export default ({ show, setShow, user, service }) => {
  const navigation = useNavigation();

  const handleCloseButton = () => {
    setShow(false);
  }

  const handleFinishClick = () => {

  }

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
    >
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseButton}>
            <ExpandIcon width="40" height="40" fill="#000000" />
          </CloseButton>

          <ModalItem>
            <UserInfo>
              <UserAvatar source={{uri: user.avatar}} />
              <UserName>{user.name}</UserName>
            </UserInfo>
          </ModalItem>

          {service != null &&
            <ModalItem>
              <ServiceInfo>
                <ServiceName>{user.services[service].name}</ServiceName>
                <ServicePrice>R$ {user.services[service].price.toFixed(2)}</ServicePrice>
              </ServiceInfo>
            </ModalItem>
          }

          <ModalItem>
            <DateInfo>
              <DatePrevArea>
                <NavPrevIcon width="35" height="35px" fill="#000000" />
              </DatePrevArea>
              <DateTitleArea>
                <DateTitle> Fevereiro 2021 </DateTitle>
              </DateTitleArea>
              <DateNextArea>
                <NavNextIcon width="35" height="35px" fill="#000000" />
              </DateNextArea>
            </DateInfo>
          </ModalItem>

          <FinishButton onPress={handleFinishClick}>
            <FinishButtontext>Finalizar Agendamento</FinishButtontext>
          </FinishButton>

        </ModalBody>
      </ModalArea>
    </Modal>
  );
}