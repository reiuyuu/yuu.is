import Image from 'next/image'

type SocialLink = {
  label: string
  href: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    label: 'Github',
    href: 'https://github.com/reiuyuu',
    icon: '/icons/github.svg',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/reiuyuu',
    icon: '/icons/twitter.svg',
  },
  {
    label: 'Douban',
    href: 'https://douban.com/people/reiuyuu',
    icon: '/icons/bookmark.svg',
  },
]

export default function SocialLinks() {
  return (
    <div className='mono-100 flex flex-col items-start gap-y-1.5 text-base leading-none md:gap-y-2 md:text-xl lg:gap-y-2.5 lg:text-[22px]'>
      {socialLinks.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-x-1'
        >
          <Image
            src={icon}
            width={24}
            height={24}
            alt={label}
            className='h-5 w-5 md:h-6 md:w-6'
          />
          <span className='sr-only'>{label}</span>
          <span>/reiuyuu</span>
        </a>
      ))}
      <span>
        <span className='mono-0'>or any other </span>/reiuyuu
      </span>
    </div>
  )
}
