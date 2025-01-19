import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const UserContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 500px;
    background-color: #1c1c1c;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  div {
    background-color: #1c1c1c;
    color: white;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
  }

  h4 {
    margin: 7px 0 7px 0;
  }
`