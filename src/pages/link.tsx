import Layout from '@/components/layout'
import Nav from '@/components/nav'
import Image from 'next/image'
import workCat from '../../public/images/work-cat.jpg'

export default function Link() {
  const intro = 'links to my demos, projects and living.'

  return (
    <Layout title='link' description={intro}>
      <Nav />

      <div className='mono-55 absolute left-0 top-32 w-64 text-base leading-relaxed md:left-16 md:top-36 md:w-[316px] md:text-xl lg:left-28 lg:top-32 lg:w-[372px] lg:text-2xl'>
        {intro}
      </div>

      <div className='absolute top-64 flex w-full flex-col items-center gap-y-10 md:left-16 md:top-72 md:w-auto md:items-start lg:left-28'>
        <Image
          src={workCat}
          alt='workcat'
          placeholder='blur'
          className='h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64'
        />
        <span className='mono-100 text-xl leading-none md:text-2xl lg:text-3xl'>
          work in progress...
        </span>
      </div>
    </Layout>
  )
}
