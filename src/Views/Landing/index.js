import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './landing.css';
import { ReactComponent as Compass } from './compass1.svg';
import { path } from './path';

const AnimFeTurbulence = animated('feTurbulence');
const AnimFeDisplacementMap = animated('feDisplacementMap');

const LandingPage = () => {
  const [open, toggle] = useState(false);
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: {
      scale: 10,
      opacity: 0,
      transform: 'scale(0.9)',
      freq: '0.0175, 0.0',
    },
    to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
    config: { duration: 3000 },
  });
  return (
    <div onClick={() => toggle(!open)} className="landing-container">
      <Compass className="compass" />
      <div className="title-box">
        <animated.svg
          className="title"
          style={{ transform, opacity }}
          viewBox="0 0 559.47 120.05"
        >
          <defs>
            <filter id="water">
              <AnimFeTurbulence
                type="fractalNoise"
                baseFrequency={freq}
                numOctaves="1.5"
                result="TURB"
                seed="8"
              />
              <AnimFeDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                in="SourceGraphic"
                in2="TURB"
                result="DISP"
                scale={scale}
              />
            </filter>
          </defs>
          <g filter="url(#water)">
            <animated.path d={path} fill="#F3F1ED" />
          </g>
        </animated.svg>
          </div>
          <div className='onboarding-box'>
              <h2 class='onboarding-subtitle'>It All Starts With a Plan</h2>
              <button id='onboarding-btn' class='btn'>Get Started</button>
          </div>
    </div>
  );
};

export default LandingPage;
