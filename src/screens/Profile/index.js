import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
//import { UserContext } from '../../contexts/UserContext';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
} from './styles';

import SignInput from '../../components/SignInput';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';

import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleLogoutClick = async () => {
    await Api.logout();
    navigation.reset({
      routes:[{name:'SignIn'}]
    });
  }

  const handleUpdateClick = async () => {
    
  }

  return(
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>

        <SignInput
          IconSvg={PersonIcon}
          value={name}
          onChangeText={t=>setName(t)}
          onFocus={true}
        />        
        <SignInput
          IconSvg={EmailIcon}
          value={email}
          onChangeText={t=>setEmail(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          value={password}
          onChangeText={t=>setPassword(t)}
          password={true}
        />
        <SignInput
          IconSvg={LockIcon}
          value={password_confirmation}
          onChangeText={t=>setPasswordConfirmation(t)}
          password={true}
        />

        <CustomButton onPress={handleUpdateClick}>
          <CustomButtonText>Atualizar Cadastro</CustomButtonText>
        </CustomButton>

        <CustomButton onPress={handleLogoutClick}>
          <CustomButtonText>Sair</CustomButtonText>
        </CustomButton>
        
      </InputArea>
    </Container>
  );
}