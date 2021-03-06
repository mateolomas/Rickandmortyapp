import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Panel de Administracion de la Champions League
        </h1>

        <p className={styles.description}>
          Empezemos, da click en una opcion para ingresar.
        </p>

        <div className={styles.grid}>
          <Link href="/admin">
            <a className={styles.card}>
              <h2>Como Administrador!</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Como miembro de mesa! </h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Como fan!</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Como anonimo!</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Sebastian Lomas

        </a>
      </footer>
    </div>
  )
}

export default Home
