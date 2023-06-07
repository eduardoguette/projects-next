import { DarkLayout } from '@/components/layouts/DarkLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link'

import { ReactNode } from 'react'

type LayoutFunction = (page: ReactNode) => ReactNode

export default function About (){
  return (
    <>
      <h1 className="text-2xl font-medium">About Page</h1>
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
      <p className="">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">pages/about.tsx</code>
      </p>
    </>
  )
} 
About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
