import Link from "next/link"

const Nav = () => (
  <div className="container flex justify-between py-6 text-xl">
    <div>
      <Link href='/'><span className="font-logo text-secondary text-6xl">JT</span></Link>
    </div>
    <div className="flex items-center gap-6">
      <Link href='projects' className='text-secondary hover:text-primary-light'>Experience</Link>
      <Link href='about' className='text-secondary hover:text-primary-light'>About</Link>
      <a href='https://notes.joetorsney.com' className='text-secondary hover:text-primary-light'>✍️ Notes</a>
    </div>
  </div>
)

export default Nav;