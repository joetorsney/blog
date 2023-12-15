import { IBM_Plex_Sans, Rubik, Libre_Baskerville } from 'next/font/google'

const ibm = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm',
})

const rubik = Rubik({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

const libre_baskerville = Libre_Baskerville({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-italic',
})


import React from "react"
import Nav from "../../nav";
import Footer from "../footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className={`${ibm.variable} ${rubik.variable} ${libre_baskerville.variable} font-sans max-w-5xl mx-auto px-4 sm:px-6 flex flex-col h-screen justify-between`}>
    <Nav />
    <main className="mb-auto">{children}</main>
    <Footer />
  </div>
)

export default Layout;