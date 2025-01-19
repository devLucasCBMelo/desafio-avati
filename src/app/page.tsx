'use client'
import Footer from "./Components/Footer";
import FormContainer from "./Components/Form";
import Header from "./Components/Header";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.secondDiv}>
        <FormContainer />
      </div>
      <Footer />        
    </div>
  );
}
