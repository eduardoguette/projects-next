import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  return (
    <MainLayout>
      <h1 className="text-2xl font-medium">Home Page</h1>
      <h1 className={`text-xl font-bold text-center`}>
        Ir a{' '}
        <Link
          className={`text-blue-600 hover:underline`}
          href="/about"
          rel="noopener noreferrer"
          prefetch={false}
        >
          About - Eduardo
        </Link>
      </h1>
      <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">pages/index.tsx</code>
      </p>
    </MainLayout>
  )
}
