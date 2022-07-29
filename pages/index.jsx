import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import twitter from "../public/twitter.png";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* LEFT  */}
        <section className={styles.imgContainer}>
          <div className={styles.twitterContainer}>
            <Image
              className={styles.twitter}
              src={twitter}
              alt="twitter image"
              layout="fill"
            />
          </div>
          <Image
            src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
            alt="twitter image"
            className={styles.imgLogin}
            layout="fill"
          />
        </section>
        {/* RIGHT */}
        <aside className={styles.rightContainer}>
          <div className={styles.icone}>
            <Image src={twitter} alt="twitter" width="100%" height="100%" />
          </div>
          <h1>
            Ça se passe
            <br /> maintenant{" "}
          </h1>
          <h2>{`Rejoignez Twitter dès aujourd'hui`}</h2>
          <div className={styles.btnsContainer}>
            <button className={styles.googleBtn}>
              <FcGoogle className={styles.googleIcon} />
              {`S'inscrire avec Google`}
            </button>
            <button className={styles.appleBtn}>
              <BsApple className={styles.appleIcon} />
              {`S'inscrire avec Apple`}
            </button>
            <p className={styles.ou}>ou</p>
            <button className={styles.tel}>
              <span>{`S'inscrire avec un numéro de téléphone`}</span>
            </button>
            <p className={styles.condition}>
              En vous inscrivant, vous acceptez les {`Conditions d'Utilisation`}{" "}
              et la Politique de Confidentialité, incluant{" "}
              {`l'Utilisation de
              Cookies`}
              .
            </p>
          </div>
          <p className={styles.already}>Vous avez déjà un compte ?</p>
          <button className={styles.connectedBtn}>Se connecter</button>
        </aside>
      </main>
    </div>
  );
}
