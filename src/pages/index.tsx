import Layout from '@/components/layout'
import Nav from '@/components/nav'
import SocialLinks from '@/components/social-links'

export default function Home() {
  return (
    <Layout description='about reiuyuu'>
      <Nav />

      <div className='mono-55 absolute top-24 whitespace-nowrap text-2xl font-semibold leading-none md:text-4xl lg:top-14 lg:text-[40px]'>
        <div className='pb-2.5 md:pb-3 lg:pb-3.5'>hi, there. I am yuu</div>
        <div className='pb-0.5 text-sm font-normal md:pb-1 md:text-lg lg:pb-1.5 lg:text-xl'>
          yet another
        </div>
        <div className='pb-2.5 md:pb-3 lg:pb-3.5'>Computer Science student</div>
        <div className='pb-0.5 text-sm font-normal md:pb-1 md:text-lg lg:pb-1.5 lg:text-xl'>
          but soon-to-be
        </div>
        <div className=''>Web developer & designer</div>
      </div>

      <div className='absolute bottom-0 bottom-4 right-0 flex h-[65%] flex-col items-end leading-normal md:bottom-0 md:h-[60%] md:text-xl lg:h-[57%] lg:text-[22px]'>
        <div className='w-[296px] grow md:w-[472px] lg:w-[712px]'>
          I am Obsessed with the idea of open source, always seeking out
          cutting-edge & lightweight technologies. Currently pursuing a career
          in web / fullstack development.
        </div>
        <div className='w-[192px] grow-[4] md:w-[352px] lg:w-[632px]'>
          Also passionate about interactive interfaces, design systems, layout
          and Typography. Enjoy building software projects that blend both
          engineering and aesthetics.
        </div>
        <div className='w-[316px] grow-0 md:w-[520px] lg:w-[800px]'>
          Outside of coding, I spend tons of time on cinema, film/literary
          theory, short novels and cat memes. Recently just started
          experimenting music with my MIDI controller and Ableton Live.
        </div>
      </div>

      <div className='absolute bottom-[20%] left-0'>
        <SocialLinks />
      </div>
    </Layout>
  )
}
