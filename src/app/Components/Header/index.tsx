'use client'
import avati from "../../Assets/avati_logo_black.png"
import Image from "next/image";
import { HeaderContainer } from "./styles";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null
  }

  return (
    <HeaderContainer>
      <div>
        <Link href="/">
          <Image src={avati} alt="Logo" width={200} height={60} priority />
        </Link>
        <button>FALE COM UM ESPECIALISTA</button>
      </div>
    </HeaderContainer>

  )
}

export default Header;