import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

export default function App({ Component, pageProps }: AppProps) {
  const [init, setInit] = useState(false);

  // Initialise the particles engine. Once initialised, change the state to cause the app to refresh
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return <Component {...pageProps} />
}
