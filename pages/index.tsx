import Layout from '../src/components/layouts/layout'
import { SEO } from '../src/components/SEO'
import Hero from '../src/components/hero'
import HeroParticles from '../src/components/heroParticles'
import Story from '../src/components/story'

export default function Home() {
  return (
    <>
      <Layout>
        <SEO title='Home' />
        <div className='flex flex-col gap-5 md:gap-10'>
          <div className='relative'>
            <div className='absolute top-[-50%] left-0 w-full h-[200%] -z-10'>
              <HeroParticles />
            </div>
            <div className='container'>
              <Hero />
            </div>
          </div>
          <div className='container'>
            <Story />
          </div>
        </div>
      </Layout>
    </>
  )
}
