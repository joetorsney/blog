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
        <div className='flex justify-center'>
          <div className='w-1/2 md:w-1/3 relative aspect-square h-auto overflow-hidden border rounded-full'>
            <Image src={profilePic} alt='A picture of me' layout='fill'/>
          </div>
        </div>
        <div>
          <h1 className='text-center text-3xl font-bold py-4'>Hello, I&apos;m Joseph Torsney</h1>
          <p className='text-justify'>
            A final year masters student of Computer Science at The University of Sheffield.
            I&apos;m currently working on a research project using advanced machine learning techniques for singing voice conversion.
            I helped develop and currently maintain {" "}
            <Link href='http://www.africainscience.org' className='text-green-600 underline'>Africa in Science</Link>, 
            an online platform that tracks the research output of African institutes.
            <br />
            <br />    
            On this website you can find my {" "}
            <Link href='projects' className='text-green-600 underline'>projects</Link>. When I find something interesting to write about, you will find it on my {" "}
            <Link href='blog' className='text-green-600 underline'>blog</Link>.  
          </p>
        </div>
      </div>

    </Layout>
  )
}
