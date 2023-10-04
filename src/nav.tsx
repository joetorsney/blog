import Link from "next/link"

const Nav = () => (
  <div className="flex justify-between py-6 text-xl">
    <div>
      <Link href='/'>🏠</Link>
    </div>
    <div className="[&>*]:mx-2 [&>*]:p-2">
      <Link href='about' className='text-green-600 hover:border-b-2'>ℹ️ About</Link>
      <Link href='projects' className='text-green-600 hover:border-b-2'>🛠️ Projects & Experience</Link>
      <Link href='blog' className='text-green-600 hover:border-b-2 '>✏️ Blog</Link>
    </div>
  </div>
)

export default Nav;