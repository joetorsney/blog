import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function App({ Component, pageProps }: AppProps) {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        links: {
          enable: true
        },
        move: {
          enable: true,
          speed: 0.3
        },
        number: {
          value: 100
        },
        opacity: {
          value: { min: 0.3, max: 1 }
        },
        shape: {
          type: ["circle"],
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <>
      <Particles options={options} id="particles" particlesLoaded={particlesLoaded}></Particles>
      <Component {...pageProps}></Component>
    </>
  }

  return <Component {...pageProps} />
}
