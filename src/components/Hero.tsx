/* eslint-disable react/no-unescaped-entities */
import "@/style/hero.scss";
// import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="section hero">
      <h1 className="title">
        <span className="highlight"> DSRT </span>
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
