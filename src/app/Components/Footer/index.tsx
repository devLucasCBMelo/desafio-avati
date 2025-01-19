'use client'
import { useEffect, useState } from "react";
import { FooterContainer, FooterSection } from "./styles";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null
  }

  return (
      <FooterContainer>
        <FooterSection>
          <h2>E-mail</h2>
          <p>contato@avati.com.br</p>
          <h2>Telefone</h2>
          <p>(84) 9 9618-8825</p>
        </FooterSection>
        <FooterSection>
          <h2>Escritório Central</h2>
          <div>
            <p>Estádio Arena das Dunas</p>
            <p>Av. Prudente de Morais, 5121,</p>
            <p>sala M02, 2º andar -</p>
            <p>Lagoa Nova</p>
            <p>Natal - RN, 59064-625</p>
          </div>
        </FooterSection>
        <FooterSection></FooterSection>
      </FooterContainer>
  )
}

export default Footer;