import { WorkCard } from "../components/WorkCard"
import { WORK_CARD_COLORS, FONT_CLASSES } from '../constants'

const workProjects = [
  {
    title: "GigPay",
    description: "Manage your freelance income",
    stack: "Product Design / UI / UX",
    bgColor: WORK_CARD_COLORS[0]
  },
  {
    title: "DevTrack",
    description: "Track dev progress with ease",
    stack: "Full Stack / SaaS",
    bgColor: WORK_CARD_COLORS[1]
  },
  {
    title: "FitHub",
    description: "Fitness community & progress tracker",
    stack: "UX Design / Frontend",
    bgColor: WORK_CARD_COLORS[2]
  }
]

const Work = () => {
  return (
    <div id="work" className="min-h-screen px-4 md:px-12 py-12 snap-section">
      <h1 className={`text-4xl ${FONT_CLASSES.GROT_BOLD} font-bold mb-8`}>Work</h1>
      
      {workProjects.map((project, index) => (
        <WorkCard
          key={project.title}
          title={project.title}
          description={project.description}
          stack={project.stack}
          bgColor={project.bgColor}
        />
      ))}
    </div>
  )
}

export default Work;
