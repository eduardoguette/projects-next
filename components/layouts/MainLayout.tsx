import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../Navbar'
interface Props {
  children: React.ReactNode
}
export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Home Page" />
      </Head>
      <Navbar />
      <main className={`flex min-h-screen flex-col items-center p-24 `}>
        {children}
      </main>
    </>
  )
}
