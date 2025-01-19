import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding-top: 45px;
  padding-bottom: 45px;
  height: 700px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    font-weight: bold;
  }

  button {
    margin-top: 15px;
    background-color: #e9f035;
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.2s ease;
  }

  button:hover {
    background-color: black;
    color: #e9f035;
  }

  button:active {
    background-color: #c7d12d;
    transform: scale(0.95);
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