import { ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useMemo } from "react";

const HeroParticles = () => {
  const options: ISourceOptions = useMemo(
      () => ({
        fpsLimit: 120,
        fullScreen: false,
        particles: {
          links: {
            enable: true
          },
          move: {
            enable: true,
            speed: 0.3
          },
          number: {
            value: 200,
            density: {
              enable: true,
              area: 700
            },
            
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

  return <Particles options={options} className="gradient-mask-b-0 w-full h-full" id="particles" />
}

export default HeroParticles