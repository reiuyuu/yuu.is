import Arrow from '@/components/arrow'
import Layout from '@/components/layout'
import Image from 'next/image'
import Link from 'next/link'
import notFoundCat from '../../public/images/not-found-cat.jpg'

export default function Custom404() {
  return (
    <Layout title='404'>
      <div className='flex h-full flex-col items-center justify-center gap-y-12 md:flex-row md:gap-x-28'>
        <Image
          src={notFoundCat}
          alt='notFoundCat'
          placeholder='blur'
          className='h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64'
        />

        <div className='flex gap-x-8 md:order-first md:flex-col md:items-start md:gap-y-12'>
          <Link href='/' className='md:-translate-x-1'>
            <Arrow className='-rotate-90' />
          </Link>
          <div className='mono-100 text-3xl font-light leading-none tracking-widest md:order-first md:text-4xl lg:text-5xl'>
            404
          </div>
        </div>
      </div>
    </Layout>
  )
}
