import { FC, ReactNode } from 'react'
type Props = {
 children: ReactNode
}
export const DarkLayout: FC<Props> = ({ children }) => {
  return <div className="dark:bg-slate-900 bg-white p-4 rounded-lg shadow-md">{children}</div>
}
