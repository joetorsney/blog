import Link from 'next/link'
import Layout from '../src/components/layouts/layout'
import { SEO } from '../src/components/SEO'


export default function Home() {
  return (
    <Layout>
      <SEO title='Home'/>

      <h1 className='text-3xl font-bold'>Hello, I'm Joseph Torsney</h1>
      <p><br />
        A final year masters student of Computer Science at The University of Sheffield. <br />
        I'm currently working on a research project using advanced machine learning techniques for singing voice conversion. <br />
        I helped develop and currently maintain {" "}
        <Link href='http://www.africainscience.org' className='text-green-600 underline'>Africa in Science</Link>, 
        an online platform that tracks the research output of African institutes.
      </p><br />

      <p>
        This website is currently under construction, but you will be able to find my {" "}
        <Link href='projects' className='text-green-600 underline'>projects</Link>, and my {" "}
        <Link href='blog' className='text-green-600 underline'>blog</Link> soon. For now, see my {" "}
        <Link href='http://github.com/joetorsney' className='text-green-600 underline'>github</Link> or {" "}
        <Link href='https://www.linkedin.com/in/joseph-torsney-788345195/' className='text-green-600 underline'>linkedin</Link>
      </p>

      <footer>
        
      </footer>
    </Layout>
  )
}
