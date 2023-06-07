import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link'

// server side rendering
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const posts = await res.json()
  return {
    props: { posts }
  }
}

export default function Contact() { 
  return (
    <MainLayout>
      <h1 className="text-2xl font-medium">Contact Page</h1>
      <h1 className={`text-xl font-bold text-center`}>
        Ir a{' '}
        <Link
          className={`text-blue-600 hover:underline`}
          href="/"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Home - Eduardo
        </Link>
      </h1>
      <p className="flex mt- w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">pages/contact.tsx</code>
      </p>
    </MainLayout>
  )
}
