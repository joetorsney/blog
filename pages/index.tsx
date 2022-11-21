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
          <h1 className='text-center text-3xl font-bold py-4 '>Hello, I'm Joseph Torsney</h1>
          <p className='text-justify'>
            A final year masters student of Computer Science at The University of Sheffield.
            I'm currently working on a research project using advanced machine learning techniques for singing voice conversion.
            I helped develop and currently maintain {" "}
            <Link href='http://www.africainscience.org' className='text-green-600 underline'>Africa in Science</Link>, 
            an online platform that tracks the research output of African institutes.
            <br />
            <br />    
            This website is currently under construction, but you will be able to find my {" "}
            <Link href='projects' className='text-green-600 underline'>projects</Link>, and my {" "}
            <Link href='blog' className='text-green-600 underline'>blog</Link> soon. For now, see my {" "}
            <Link href='http://github.com/joetorsney' className='text-green-600 underline'>github</Link> or {" "}
            <Link href='https://www.linkedin.com/in/joseph-torsney-788345195/' className='text-green-600 underline'>linkedin</Link>
          </p>
        </div>
      </div>

    </Layout>
  )
}
