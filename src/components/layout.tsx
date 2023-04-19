import Meta from '@/components/meta'

type LayoutProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Meta title={title} description={description} />

      <div className='flex min-h-screen items-center justify-center'>
        <main className='h-screen min-h-[812px] w-full md:max-h-[1024px] md:min-h-[900px] md:w-[640px] lg:max-h-[900px] lg:min-h-[768px] lg:w-[900px]'>
          <div className='relative mx-4 h-full md:mx-0'>{children}</div>
        </main>
      </div>
    </>
  )
}
