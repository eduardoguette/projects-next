import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties, FC } from 'react'

const style:CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface Props {
  name: string
  path: string
}

export const ActiveLink: FC<Props> = ({ name, path }) => {
  const location = useRouter()
  const { asPath } = location
  const isActive = asPath === path

  return (
    <li>
      <Link
        href={path}
        style={isActive ? style : undefined}
        className=" hover:underline rounded-md px-2 py-1"
      >
        {name}
      </Link>
    </li>
  )
}
