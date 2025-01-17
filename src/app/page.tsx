import styles from "./page.module.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
      </main>
      <Footer />  
      
    </div>
  );
}
