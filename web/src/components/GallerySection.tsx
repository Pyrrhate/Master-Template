import { ExternalLink } from "lucide-react";
import projectAurora from "@/assets/project-aurora.jpg";
import projectNeon from "@/assets/project-neon.jpg";
import projectVoid from "@/assets/project-void.jpg";
import projectSignal from "@/assets/project-signal.jpg";
import projectDrift from "@/assets/project-drift.jpg";

interface Project {
  title: string;
  category: string;
  imageUrl: string;
  span: string;
}

const projects: Project[] = [
  {
    title: "Aurora Dashboard",
    category: "Web Application",
    imageUrl: projectAurora,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Neon Commerce",
    category: "E-commerce",
    imageUrl: projectNeon,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Void Portfolio",
    category: "Creative Site",
    imageUrl: projectVoid,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Signal Analytics",
    category: "SaaS Platform",
    imageUrl: projectSignal,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Drift Studio",
    category: "Design System",
    imageUrl: projectDrift,
    span: "md:col-span-1 md:row-span-1",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
            The Output
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            The Gallery
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Selected works from the factory floor. Each piece is engineered to perform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`${project.span} group relative overflow-hidden rounded-2xl glass aspect-[4/3] cursor-pointer transition-all duration-500 hover:scale-[1.02]`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-medium text-primary tracking-wide uppercase mb-1">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Static label */}
              <div className="absolute top-4 left-4 glass rounded-full px-3 py-1">
                <span className="text-xs font-medium text-muted-foreground">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
