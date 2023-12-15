import Link from 'next/link'
import Image from 'next/image'
import Layout from '../src/components/layouts/layout'
import { SEO } from '../src/components/SEO'

import profilePic from '../public/images/profilepic.png'

export default function Home() {
  return (
    <Layout>
      <SEO title='Home'/>
      <div>
        <div className='md:flex items-center gap-8 flex-row-reverse'>
          <div className='max-md:flex justify-center'>
            <div className='max-w-md max-md:w-1/2 relative aspect-square h-auto overflow-hidden border-0 border-transparent rounded-3xl'>
              <Image src={profilePic} alt='A picture of me' layout='responsive'/>
            </div>
          </div>
          <div className='justify'>
            <h1 className='justify font-medium text-3xl text-secondary py-2'><span>Hello, I&apos;m</span><span className='font-serif-italic'> Joseph Torsney</span></h1>
            <h1 className='justify text-2xl py-2'>I am a Masters of Computer Science Graduate with 2 years professional experience</h1>
            <h1 className='justify text-2xl py-2'>I am interested in <span className='font-mono'>Full Stack Web Development</span></h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}
