/* eslint-disable react/no-unescaped-entities */
"use client";

import "@/style/hero.scss";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="section hero">
      <h1 className="title">
        <span className="highlight"> <Typewriter 
        options={{
          strings: [
            'CREATE',
            'DESIGN',
            'BUILD',
            'INNOVATE',
            'COLLABORATE',
            'ENGINEER',
            'PROTOTYPE',
            'SOLVE',
            'EXPERIMENT',
            'PROGRAM',
          ],
          autoStart: true,
          loop: true,
        }}
      /> </span>
      </h1>
      <h2 className="sub-title">THE DARTMOUTH STUDENTS ROBOTICS TEAM</h2>
      
      <p className="paragraph">
        Through creativity, curiosity, and critical thinking skills facilitated by 
        Dartmouth’s liberal arts education, we intend to combine artificial intelligence
        and machine learning with robotics to generate solutions to problems in the real world.
      </p>

    </div>

  )
}
