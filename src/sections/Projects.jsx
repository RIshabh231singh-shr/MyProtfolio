import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Sparkles } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Card } from '../components/Card';
import { ProjectModal } from '../components/ProjectModal';
import projectsData from '../data/projects.json';
import { cn } from '../lib/utils';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <SectionWrapper 
      id="projects" 
      title="Selected Work & Systems." 
      subtitle="02. Engineering Projects"
    >
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 pt-4 hide-scrollbar w-full">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleProjectClick(project)}
            className="cursor-pointer shrink-0 snap-center w-[85vw] md:w-[420px]"
          >
            <Card className={cn(
              "group h-full flex flex-col p-8 border hover:border-accent-cyan/30 transition-all duration-500",
              project.featured 
                ? "border-accent-cyan/20 ring-1 ring-accent-cyan/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]" 
                : "border-border"
            )}>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-accent-cyan/5 rounded-2xl text-accent-cyan group-hover:bg-accent-cyan group-hover:text-background transition-all duration-500">
                  {project.featured ? <Sparkles size={24} /> : <Folder size={24} />}
                </div>
                <div className="flex items-center gap-4 text-secondary/40 group-hover:text-accent-cyan transition-colors">
                  <Github size={20} />
                  <ExternalLink size={20} />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4 mb-10 flex-1">
                <h3 className="text-2xl font-bold font-heading text-primary group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-lg text-[10px] font-mono text-secondary uppercase tracking-widest border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </SectionWrapper>
  );
};