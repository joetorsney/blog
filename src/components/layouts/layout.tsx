import { IBM_Plex_Sans, Rubik, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

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
  <>
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      <div className="-z-10 h-full w-full bg-gradient-to-t from-primary to-blue-900"></div>
    </div>
    <div className={`${ibm.variable} ${rubik.variable} ${libre_baskerville.variable} font-sans flex flex-col h-screen justify-between`}>
      <Nav />
      <main className="">{children}</main>
      <Footer />
    </div>
    <Analytics />
  </>
)

export default Layout;