import "@/style/projects.scss"

export default function Projects() {
  const projects = [
    {
      name: "RoboCup Soccer",
      description: "RoboCup is an international robotics competition founded in 1997. The aim of the competition is to promote robotics and AI research, by offering a publicly appealing, but formidable challenge. The name RoboCup is a contraction of the competition's full name, \"Robot Soccer World Cup\".",
      image: "/01.png"
    },
    {
      name: "RoboCup Rescue",
      description: "RoboCup is an international robotics competition founded in 1997. The aim of the competition is to promote robotics and AI research, by offering a publicly appealing, but formidable challenge. The name RoboCup is a contraction of the competition's full name, \"Robot Soccer World Cup\".",
      image: "/02.png"
    }
  ];

  return (
    <div className="section">
      <h1 id="projects" className="title">Projects</h1>
      <p className="paragraph">
        RoboTeam tends to compete in a new competition every 1-2 years.
        These are some of the competitions we have worked towards in the past.
      </p>
      <div className="projects-grid">
        {
          projects.map((project) => {
            return (
              <div key={project.name} className="project-card">
                <div className="project-details">
                  <h1 className="project-title">{project.name}</h1>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-image-wrapper">
                  <img className="project-image" src={project.image} />
                </div>
              </div>
            )
          }
        )}
      </div>

    </div>
  )
}
