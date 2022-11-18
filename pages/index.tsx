import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Joseph Torsney</title>
        <meta name="description" content="Joseph Torsney" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
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
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
