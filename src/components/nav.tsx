import Link from 'next/link'
import { useRouter } from 'next/router'

type Link = {
  href: string
  label: string
}

const links: Link[] = [
  { href: '/', label: 'about' },
  { href: '/blog', label: 'blog' },
  { href: '/link', label: 'link' },
]

export default function Nav() {
  const router = useRouter()

  return (
    <div className='mono-100 absolute top-6 flex w-full justify-between text-[22px] font-extrabold leading-none md:right-0 md:top-0 md:w-auto md:flex-col md:items-end md:gap-3 md:text-3xl lg:gap-y-4 lg:text-4xl'>
      {links.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          className={
            router.pathname === href
              ? 'underline decoration-2 underline-offset-4 md:decoration-4 md:underline-offset-[6px]'
              : ''
          }
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
