import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Jobby",
    description: "Job Search Site",
    image: "/projects/project1.JPG",
    tags: ["React", "JavaScript", "Tailwind", "Bootstrap", "RestAPI"],
    demo: "https://jobby-apps.netlify.app/",
    github: "https://github.com/Rohitku1023/Jobby-App",
  },
  {
    id: 2,
    title: "NxtTrendz",
    description: "Ecommerce Site",
    image: "/projects/project2.JPG",
    tags: ["React", "JavaScript", "Tailwind", "Bootstrap", "RestAPI"],
    demo: "https://ecommercerk.netlify.app/login",
    github: "https://github.com/Rohitku1023/Ecommerce",
  },
  {
    id: 3,
    title: "MailGen AI",
    description: "AI ColdMail Generator",
    image: "/projects/project3.JPG",
    tags: [
      "React",
      "JavaScript",
      "Tailwind",
      "OpenAI",
      "NodeMailer",
      "Brevo",
      "Render",
      "Node",
      "MoongoDB",
      "Express",
    ],
    demo: "https://client-lyart-one-21.vercel.app/",
    github: "https://github.com/Rohitku1023/AI-Cold-Mail-Generator",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Click on the links to
          see
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between item-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Rohitku1023"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
