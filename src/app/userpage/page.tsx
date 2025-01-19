'use client';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Layout, UserContainer } from "./styles"

const UserPage = () => {
  return (
    <Layout>
      <Header />
      <UserContainer>
        <h1>Seja bem vindo à AVATI!!</h1>

        <p>A AVATI tem mais de 6 anos de mercado, acelerando startups por todo o Brasil, e contribuindo com a expansão de negócios através de know-how, networking e investimentos.</p>
        <div>
          <h4>+ 3.000 startups aceleradas</h4>
          <h4>16 unidades federativas atendidas pelas AVATI</h4>
          <h4>250 investidores-anjo e VCs em nossa rede</h4>
        </div>
      </UserContainer>
      <Footer />
    </Layout>
  )
}

export default UserPage;