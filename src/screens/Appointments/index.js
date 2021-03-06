import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import {
  Container,
  Scroller,
  ListArea,
  EmptyWarning
} from './styles';

import AppointmentItem from '../../components/AppointmentItem';
import Api from '../../Api';

export default () => {

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(()=>{
    getAppointments();
  }, []);

  // Requisição de agendamentos
  const getAppointments = async () => {
    setLoading(true);// Inicia loading
    setList([]);// Zerar a lista
        
      let res = await Api.getAppointments();// Pega o nome digitado
      if(res.error == '') {       
        setList(res.list);// Lista de resultado        
      } else {
        alert('Erro: '+res.error);
      }
    setLoading(false);// Encerra loading
  }

  return (
    <Container>

    <Scroller refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getAppointments} />
      }> 

      {!loading && list.length === 0 &&
        <EmptyWarning>Não há agendamentos.</EmptyWarning>
      }    

      <ListArea>
        {list.map((item, k)=>(
          <AppointmentItem key={k} data={item} />
        ))}
      </ListArea>
    </Scroller>

    </Container>
  );
}