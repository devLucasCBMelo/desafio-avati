import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding-top: 45px;
  padding-bottom: 45px;
  height: 700px;

  button {
    margin-top: 15px;
    background-color: #e9f035;
  }
`

export const InputBorder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0px 8px;
  height: 48px;
  margin-bottom: 10px;

  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 0px 8px;
    font-size: 1rem;
    letter-spacing: 0em;
    line-height: 1.rem;
  }
`