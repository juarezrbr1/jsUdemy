import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "lodash";
import { FaUserCircle, FaEdit, FaTrashAlt } from "react-icons/fa";

import { Container } from "../../styles/GlobalStyles";
import { AlunoContainer, ProfilePicture } from "./styled";
import axios from "../../services/axios";

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getdata() {
      setIsLoading(true);
      const response = await axios.get("/alunos");
      setAlunos(response.data);
      setIsLoading(false);
    }

    getdata();
  }, []);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, "Fotos[0].url", false) ? (
                <img src={aluno.Fotos[0].url} alt="Foto do aluno" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/alunos/${aluno.id}/editar`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/alunos/${aluno.id}/delete`}>
              <FaTrashAlt sinze={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
