import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { Card } from '../components/Card';
import skillsData from '../data/skills.json';
import profile from '../data/profile.json';
import { Layout, Database, Cpu, Globe, Code2, Terminal, BookOpen, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { AnimatedCounter } from '../components/AnimatedCounter';

const iconMap = {
  Layout: Layout,
  Database: Database,
  Cpu: Cpu,
  Globe: Globe,
  Code2: Code2,
  Terminal: Terminal
};

export const About = () => {
  return (
    <SectionWrapper 
      id="about" 
      title="System-Oriented Engineer." 
      subtitle="01. About Me"
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start pb-12 overflow-hidden">
        
        {/* Left Column: Bio */}
        <div className="w-full lg:w-1/2 space-y-8 text-lg text-secondary font-light leading-relaxed">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-2xl font-bold font-heading text-primary leading-tight mb-8">
              I am an aspiring Software Development Engineer with a strong focus on building scalable full-stack applications, backend systems, and efficient architectures. I specialize in the MERN stack, C++, and system design, with hands-on experience in deploying production-ready applications using modern cloud and caching solutions.
            </p>

            <p>
              Currently pursuing <span className="text-accent-cyan font-medium">B.Tech in Civil Engineering</span> at <span className="text-accent-purple font-medium">NIT Calicut</span>, I leverage a strong analytical foundation to design scalable backend systems and high-performance full-stack applications with real-world impact.
            </p>

            <p>
              My approach is driven by <span className="text-primary font-medium tracking-tight">structured problem solving</span> and <span className="text-primary font-medium tracking-tight">system design thinking</span>. I have solved over <span className="text-accent-cyan font-medium">500+ algorithmic problems</span> and actively apply concepts like caching, load balancing, and design patterns to build efficient and scalable systems.
            </p>

            <p>
              I have built and deployed multiple production-ready projects, integrating technologies like <span className="text-accent-cyan font-medium">Redis for caching</span>, <span className="text-accent-purple font-medium">Cloudinary for media handling</span>, and distributed APIs for optimized performance. My focus is on writing clean, maintainable code while designing systems that scale.
            </p>
            
            <div className="pt-10 flex flex-wrap items-center gap-10">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black text-primary font-heading tracking-tighter">
                  <AnimatedCounter value={profile.stats.cgpa} duration={1.5} />
                </span>
                <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.3em]">B.TECH CGPA</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black text-primary font-heading tracking-tighter">
                  <AnimatedCounter value={profile.stats.projects} duration={2} />
                </span>
                <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.3em]">ENGINEERED PROJECTS</span>
              </div>
            </div>

            <div className="pt-12 flex flex-col sm:flex-row gap-6">
               <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                  <Button variant="glow" className="gap-3 group px-8 font-bold text-xs uppercase tracking-widest">
                     LinkedIn <BookOpen size={16} />
                  </Button>
               </a>
              <a href={profile.resume} target="_blank" rel="noreferrer">
                <Button variant="outline" className="gap-3 group px-8 font-bold text-xs uppercase tracking-widest w-full sm:w-auto">
                   Resume Copy <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Skills Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 relative max-h-[800px] overflow-y-auto pr-4 hide-scrollbar scroll-contained py-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          {skillsData.map((skillGroup, index) => {
            const IconComponent = iconMap[skillGroup.icon] || Terminal;
            
            return (
              <Card 
                key={index} 
                delay={0.1 * index} 
                variant="lighter"
                className="hover:scale-[1.02] transition-all duration-700 border-white/5 hover:border-accent-cyan/20 group backdrop-blur-[20px] bg-white/[0.02]"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-accent-cyan/10 rounded-2xl text-accent-cyan border border-accent-cyan/20 group-hover:bg-accent-cyan group-hover:text-background transition-all duration-500">
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black text-primary font-heading tracking-tight">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="max-h-48 overflow-y-auto pr-2 hide-scrollbar">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
                    {skillGroup.items.map((item, idx) => (
                       <li 
                         key={idx} 
                         className="flex items-center gap-3 text-sm text-secondary/80 font-mono hover:text-accent-cyan transition-all duration-300 group/item"
                       >
                          <span className="text-accent-cyan/40 text-[10px] group-hover/item:translate-x-1 transition-transform">▹</span>
                          {item}
                       </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};