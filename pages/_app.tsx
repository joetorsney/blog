import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

export default function App({ Component, pageProps }: AppProps) {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      console.log("hello")
      setInit(true);
    });
  }, []);

  return <Component {...pageProps} />
}
