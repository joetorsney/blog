import Link from "next/link";

const UnderConstruction = () => (
    <div>
      <h1 className='text-5xl'>🚧</h1><br />
      <h1 className='text-3xl font-bold'>Sorry! This page is under construction</h1><br />
      <Link href='/' className="text-green-600 underline">Back to home</Link>
    </div>
)
  
  export default UnderConstruction;