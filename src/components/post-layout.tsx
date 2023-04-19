import Arrow from '@/components/arrow'
import Meta from '@/components/meta'
import Toc from '@/components/toc'
import getHeadings from '@/lib/get-headings'
import Link from 'next/link'
import { renderToString } from 'react-dom/server'
import Balancer from 'react-wrap-balancer'

type PostLayoutProps = {
  id: string
  date: string
  title: string
  description: string
  children: React.ReactElement
}

export default function PostLayout({
  id,
  date,
  title,
  description,
  children,
}: PostLayoutProps) {
  const headings = getHeadings(renderToString(children))

  return (
    <>
      <Meta title={title} description={description} />

      <div className='mx-4 flex flex-col md:mx-auto md:max-w-screen-md lg:max-w-screen-lg'>
        <div className='fixed hidden h-screen lg:block'>
          <ul className='mono-55 absolute bottom-[14%] w-56 pr-9'>
            {headings.map((heading) => (
              <Toc key={heading.href} {...heading} />
            ))}
          </ul>
        </div>

        <div className='group mt-12 print:hidden md:mt-16 lg:fixed lg:mt-32'>
          <Link href='/blog'>
            <Arrow className='-translate-x-1.5 -rotate-90' />
          </Link>
        </div>

        <article className='prose prose-base prose-blanc mb-8 mt-8 md:prose-lg lg:prose-xl prose-a:prose-li:no-underline prose-li:prose-blockquote:my-0 md:mb-12 md:mt-12 lg:mb-16 lg:mt-36 lg:max-w-2xl lg:self-end'>
          <span className='mono-100'>{date}</span>
          <h1 className='mono-55 leading-tight'>
            <Balancer>{title}</Balancer>
          </h1>

          {children}
        </article>

        <div className='mb-12 text-right print:hidden md:mb-16 lg:mb-20'>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </>
  )
}
