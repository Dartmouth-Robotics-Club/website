import "@/style/projects.scss"

export default function Projects() {
  const projects = [
    {
      name: "VEX U 2023/2024",
      description: "The VEX U college and university competition has more than 300 teams competing annually. Based on the VEX Robotics Competition, VEX U teams are allowed more customization and greater flexibility than other grade levels while providing the effective costs and real-world limitations of a restricted development environment.",
      image: "/01.png"
    },
    {
      name: "Product Design",
      description: "RoboCup is an international robotics competition founded in 1997. The aim of the competition is to promote robotics and AI research, by offering a publicly appealing, but formidable challenge. The name RoboCup is a contraction of the competition's full name, \"Robot Soccer World Cup\".",
      image: "/02.png"
    }
  ];

  return (
    <div className="section">
      <h1 id="projects" className="title">Projects</h1>
      <p className="paragraph">
        DSRT focuses on product design and Vex U competition projects
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
                  <img className="project-image" alt="project-image" src={project.image} />
                </div>
              </div>
            )
          }
        )}
      </div>

    </div>
  )
}
