import Link from "next/link"

const Footer = () => (
  <footer className="container w-full py-6">
    <div className="flex gap-5">
      <Link href='https://www.linkedin.com/in/joseph-torsney-788345195/'>LinkedIn</Link>
      <Link href='https://github.com/joetorsney'>Github</Link>
    </div>
  </footer>
)

export default Footer;