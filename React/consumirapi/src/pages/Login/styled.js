import styled from "styled-components";

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius:4px;
    border: 1px solid #ddd;

  &:focus {
    border: 1px solid #f00;
    box-shadow: 0 0 5px #f00;
  }}
`;
