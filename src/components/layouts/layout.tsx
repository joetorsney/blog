import React from "react"
import Nav from "../../nav";
import Footer from "../footer";
import { SEO } from "../SEO";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className='max-w-5xl mx-auto px-4 sm:px-6 flex flex-col h-screen justify-between'>
    <Nav />
    <main className="mb-auto">{children}</main>
    <Footer />
  </div>
)

export default Layout;