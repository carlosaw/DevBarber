import React, { useState } from 'react';
import {
  Container,
  SearchArea,
  SearchInput,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning
} from './styles';

import BarberItem from '../../components/BarberItem';
import Api from '../../Api';

export default () => {

  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [emptyList, setEmptyList] = useState(false);
  const [list, setList] = useState([]);

  // Requisição de busca
  const searchBarbers = async () => {
    setEmptyList(false);
    setLoading(true);// Inicia loading
    setList([]);// Zerar a lista
    
    if(searchText != '') {// Se digitou a busca
      let res = await Api.search(searchText);// Pega o nome digitado
      if(res.error == '') {
        if(res.list.length > 0) {
          setList(res.list);// Lista de resultado
        } else {
          setEmptyList(true);
        }         
      } else {
        alert('Erro: '+res.error);
      }
    }
    setLoading(false);// Encerra loading
  }

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#FFFFFF"
          value={searchText}
          onChangeText={t=>setSearchText(t)}//Pega o texto digitado
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus
          selectTextOnFocus
        />
      </SearchArea>

    <Scroller>
      <>
      {loading &&
        <LoadingIcon size="large" color="#000000" />
      }

      {emptyList &&
        <EmptyWarning>Não achamos barbeiros com nome "{searchText}"</EmptyWarning>
      }

      <ListArea>
        {list.map((item, k)=>(
          <BarberItem key={k} data={item} />
        ))}
      </ListArea>
      </>
    </Scroller>

    </Container>
  );
}