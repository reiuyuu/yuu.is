type TocProps = {
  level: 'h2' | 'h3'
  text: string
  href: string
}

export default function Toc({ level, text, href }: TocProps) {
  return level === 'h2' ? (
    <li className='my-2.5 truncate text-lg leading-none' key={href}>
      <a href={href}>{text}</a>
    </li>
  ) : (
    <li className='my-2 truncate pl-4 text-base leading-none' key={href}>
      <a href={href}>{text}</a>
    </li>
  )
}
