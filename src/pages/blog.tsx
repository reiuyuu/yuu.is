import Arrow from '@/components/arrow'
import Layout from '@/components/layout'
import Nav from '@/components/nav'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import postsData from '../../posts.json'

type Post = {
  id: string
  date: string
  title: string
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  return {
    props: {
      posts: postsData.map((post) => ({ ...post })),
    },
  }
}

export default function Blog({ posts }: { posts: Post[] }) {
  const intro = 'writings about my passions, thoughts and serendipity.'

  return (
    <Layout title='blog' description={intro}>
      <Nav />

      <div className='mono-55 absolute left-0 top-32 w-64 text-base leading-relaxed md:left-16 md:top-36 md:w-[424px] md:text-xl lg:left-28 lg:top-32 lg:w-[516px] lg:text-2xl'>
        {intro}
      </div>

      <ul className='absolute top-56 flex w-full flex-col gap-y-6 md:left-16 md:top-72 md:w-[472px] md:gap-y-8 lg:left-28 lg:w-[640px] lg:gap-y-9'>
        {posts.map(({ id, title, date }) => (
          <li key={id} className='group'>
            <Link
              href={`/blog/${id}`}
              className='flex items-end justify-between'
            >
              <div className='flex w-5/6 flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2'>
                <div className='mono-100 text-xs leading-none md:text-sm lg:text-base'>
                  {date}
                </div>
                <div className='text-lg font-medium leading-snug md:text-2xl lg:text-3xl'>
                  <Balancer>{title}</Balancer>
                </div>
              </div>
              <Arrow className='translate-y-1 rotate-90' />
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
