import { ActiveLink } from './ActiveLink'
const arrayNav = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
  {
    name: 'Pricing',
    path: '/pricing'
  }
]

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center space-x-4 p-4">
        {arrayNav.map((item, index) => (
          <ActiveLink {...item} key={index} />
        ))}
      </ul>
    </nav>
  )
}
