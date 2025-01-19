import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #030304;
  height: 80px;


  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 80%;
  }

  button {
    background: none;
    border-color: #e9f035;
    color: #e9f035;
    font-weight: bold;
    border-radius: 5px;
  }

  button:hover {
    background-color: #e9f035;
    color: black;
  }
`