import projects from "./projects.helpers";
import ProjectItem from "./ProjectItem";

export const Projects = () => {
  return (
    <section
      className="relative bg-primary-black text-primary-white py-8"
      id="projects"
    >
      <div className="relative h-[100vh]">
        {projects.map((project, idx) => {
          return <ProjectItem key={idx} project={project} idx={idx} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
