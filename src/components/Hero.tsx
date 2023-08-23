/* eslint-disable react/no-unescaped-entities */
import "@/style/hero.scss"
export default function Hero() {
  return (
    <div className="section">
      <h1 className="title">
        Design. Build. <span className="highlight">Repeat. </span>
      </h1>

      <h2 className="sub-title">Dartmouth's Premier Competitive Robotics Team</h2>
      <p className="paragraph">
        The Dartmouth Robotics Team is a group of highly motivated undergraduate students from Dartmouth College.
        Our diverse group, with majors ranging from Mechanical Engineering to Business Analytics,
        shares a common passion for the field of robotics.
        The team’s purpose is to explore exciting new technologies, learn critical skills,
        and promote the field of robotics through entering a variety of competitions
        and engaging in outreach events in the wider community.
        Unlike many other student teams, the Robotics Team is not formed around any one particular contest or event.
        Rather, the team prefers to continually evolve through finding exciting new opportunities
        where they can use the skills they have developed from previous competitions.
      </p>
    </div>
  )
}
