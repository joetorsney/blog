import Link from "next/link"

const Nav = () => (
  <div className="flex justify-between py-6 text-xl">
    <div>
      <Link href='/'><span className="font-logo text-secondary text-6xl">JT</span></Link>
    </div>
    <div className="flex items-center [&>*]:mx-2">
      <Link href='projects' className='text-secondary hover:text-primary-light'>Experience</Link>
      <Link href='about' className='text-secondary hover:text-primary-light'>About</Link>
      {/* <Link href='contact' className='text-secondary hover:text-primary-light'>Contact</Link> */}
      {/* <Link href='blog' className='text-secondary hover:border-b-2 '>✏️ Blog</Link> */}
    </div>
  </div>
)

export default Nav;