import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import experienceData from '../data/experience.json';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { Card } from '../components/Card';

export const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Professional Timeline." subtitle="03. History">
      <div className="relative w-full max-w-[100vw] py-12">
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-12 pb-16 pt-12 hide-scrollbar w-full min-h-[400px]">
          
          {/* Continuous Horizontal Line */}
          <div className="absolute top-[5rem] left-0 right-[-50vw] h-[2px] bg-gradient-to-r from-accent-cyan/50 via-accent-purple/50 to-transparent pointer-events-none w-[200vw] z-0"></div>

          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative shrink-0 snap-center w-[85vw] md:w-[450px] flex flex-col pt-12"
            >
              {/* Dot marker on the timeline */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -top-[23px] w-4 h-4 bg-accent-cyan rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)] z-20 border-4 border-background"></div>
              
              {/* Vertical branch line connecting dot to card */}
              <div className="absolute left-[31px] md:left-1/2 top-[0] w-[2px] h-12 bg-gradient-to-b from-accent-cyan/50 to-transparent z-10 md:-translate-x-1/2"></div>

              {/* Content Card */}
              <Card className="z-20 h-full p-8 border hover:border-accent-cyan/30 transition-all duration-500 hover:-translate-y-1 bg-white/5 dark:bg-white/5 bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-3 bg-accent-cyan/10 rounded-xl text-accent-cyan shrink-0">
                    <Briefcase size={20} />
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-primary leading-tight">
                      {exp.role}
                    </h3>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 mb-8 pb-6 border-b border-border">
                  <div className="flex items-center gap-3 text-accent-cyan text-sm font-mono tracking-wider font-semibold">
                    <Building2 size={16} />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-3 text-secondary text-xs font-mono">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.points.map((bullet, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-4 text-sm text-secondary font-light leading-relaxed"
                    >
                      <CheckCircle2 size={16} className="text-accent-cyan shrink-0 mt-1 opacity-60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
          
          {/* Spacer to allow scrolling past final item comfortably */}
          <div className="shrink-0 w-8 md:w-24"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};
