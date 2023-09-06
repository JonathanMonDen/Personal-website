import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particelsLoaded = useCallback(async () => {}, []);

  return (
    <Particles
    className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particelsLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color:{
            value: ''
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover:{
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push:{
              quantity: 90
            },
            repulse: {
              distance: 100,
              duration: 0.5,
            }
          }
        },
        particles: {
          color: {
            value: '#fef3c7',
          },
          links: {
            color: '#fffbeb',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: {min: 1, max: 3},
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
