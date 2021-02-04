import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
        <footer>
          <a
            title="Watch on GitHub"
            href="https://github.com/alexey-ledenev/next-typescript-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
      <style jsx>{`
        div {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1 1 auto;
          padding: 0.5rem 5%;
        }
        footer {
          padding: 0.5rem;
          text-align: center;
        }
      `}</style>
    </>
  )
}
