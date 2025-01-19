import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1c1c1c;
  color: white;
  width: 100%;
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  h2 {
    margin: 2px;
  }

  p {
    font-weight: bold;
    color: #aeaeae;
  }
`