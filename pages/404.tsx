import Link from "next/link";
import Layout from "../src/components/layouts/layout";

const FourOFour = () => (
  <Layout>
    <div>
      <h1 className='text-5xl'>🔎</h1><br />
      <h1 className='text-3xl font-bold font-mono'>404 Page not found</h1><br />
      <Link href='/' className="underline">Back to home</Link>
    </div>
  </Layout>
)

export default FourOFour;