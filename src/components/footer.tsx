import Link from "next/link"

const Footer = () => (
  <footer className="width-100 py-6 text-sm">
    <div className="[&>*]:mx-4 [&>*]:p-2">
      <Link href='https://www.linkedin.com/in/joseph-torsney-788345195/' className='text-green-600 underline'>LinkedIn</Link>
      <Link href='https://github.com/joetorsney' className='text-green-600 underline '>Github</Link>
    </div>
  </footer>
)

export default Footer;