import avati from "../../Assets/avati_logo.png"
import Image from "next/image";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Image src={avati} width={200} height={100} alt="logo da avati" />
      <h1>Meu Header</h1>

    </HeaderContainer>
  )
}

export default Header;