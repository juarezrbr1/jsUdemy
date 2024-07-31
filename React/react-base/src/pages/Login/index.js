import React from "react";
import { toast } from 'react-toastify'

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";
import axios from "../../services/axios"

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }

    getData();
  }, [])

  toast.info('Mensagem de sucesso!')
  toast.success('Mensagem de sucesso!')
  toast.error('Mensagem de sucesso!')
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>
          Oii
        </small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  )
}
