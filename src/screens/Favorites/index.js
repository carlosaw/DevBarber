import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import {
  Container,
  HeaderArea,
  HeaderTitle,
  Scroller,
  ListArea,
  EmptyWarning
} from './styles';

import BarberItem from '../../components/BarberItem';
import Api from '../../Api';

export default () => {

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(()=>{
    getFavorites();
  }, []);

  // Requisição de busca
  const getFavorites = async () => {
    setLoading(true);// Inicia loading
    setList([]);// Zerar a lista
        
      let res = await Api.getFavorites();// Pega o nome digitado
      if(res.error == '') {       
        setList(res.list);// Lista de resultado        
      } else {
        alert('Erro: '+res.error);
      }
    setLoading(false);// Encerra loading
  }

  return (
    <Container>

      <HeaderArea>
        <HeaderTitle>Favoritos</HeaderTitle>
      </HeaderArea>

    <Scroller refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getFavorites} />
      }> 

      {!loading && list.length === 0 &&
        <EmptyWarning>Não há favoritos.</EmptyWarning>
      }    

      <ListArea>
        {list.map((item, k)=>(
          <BarberItem key={k} data={item} />
        ))}
      </ListArea>
    </Scroller>

    </Container>
  );
}