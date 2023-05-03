import Arrow from '@/components/arrow'
import { getHeadingId } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const H2 = ({ children }: { children: string }) => {
  const id = getHeadingId(children)

  return (
    <h2 className='relative' id={id}>
      <a
        href={`#${id}`}
        className='no-underline before:absolute before:-left-4 before:opacity-0 before:content-["#"] hover:before:opacity-100 md:before:-left-6 lg:before:-left-7'
      >
        {children}
      </a>
    </h2>
  )
}

const H3 = ({ children }: { children: string }) => {
  const id = getHeadingId(children)

  return (
    <h3 className='relative' id={id}>
      <a
        href={`#${id}`}
        className='no-underline before:absolute before:-left-4 before:opacity-0 before:content-["#"] hover:before:opacity-100 md:before:-left-5 lg:before:-left-6'
      >
        {children}
      </a>
    </h3>
  )
}

const A = ({ href, children }: { href: string; children: string }) =>
  href?.startsWith('/') ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )

const IMG = ({
  src,
  alt,
  desc,
}: {
  src: string
  alt: string
  desc?: string
}) => (
  <div>
    <Image
      src={src}
      alt={alt}
      placeholder='blur'
      className='mb-0 md:mb-0 lg:mb-0'
    />
    {desc && <figcaption>{desc}</figcaption>}
  </div>
)

const Ref = ({ id }: { id: number }) => (
  <a href={`#f${id}`} id={`r${id}`} className='no-underline'>
    <sup>{id}</sup>
  </a>
)

const Note = ({ id, src, text }: { id: number; src: string; text: string }) => (
  <li key={id}>
    <div className='flex items-center justify-between md:justify-start'>
      <A href={src}>{text}</A>
      <a href={`#r${id}`} id={`f${id}`} className='no-underline print:hidden'>
        <Arrow className='h-8 w-8 text-[1.4em] md:w-9 md:w-9 md:text-[1.4em] lg:w-10 lg:w-10 lg:text-[1.4em]' />
      </a>
    </div>
  </li>
)

const FootNotes = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className='flex justify-center'>
      <hr className='w-1/3 border-t-2' />
    </div>
    <ol className='my-0 md:my-0 lg:my-0'>{children}</ol>
  </>
)

export { A, FootNotes, H2, H3, IMG, Note, Ref }
