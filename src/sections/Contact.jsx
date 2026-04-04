/**
 * CONTACT FORM DATA INTEGRATION GUIDE (EmailJS)
 * --------------------------------------------
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an Email Service (Gmail, Outlook, etc.) -> Copy 'Service ID'
 * 3. Create an Email Template -> Copy 'Template ID'
 * 4. Go to Account -> Public Key -> Copy 'Public Key'
 * 5. Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' 
 *    in the sendEmail function below.
 * 
 * Your form is already configured with variables: 'user_name', 'user_email', and 'message'.
 */

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Copy, CheckCircle2, Send, Mail, MapPin, Github, Linkedin, MessageSquare, Loader2, Code2, Link2 } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import profile from '../data/profile.json';

// Custom Icons
const GFGIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 16.51c-2.47-.19-4.38-2.27-4.38-4.78 0-2.65 2.15-4.8 4.8-4.8 1.13 0 2.16.4 2.97 1.06l-1.03 1.03c-.53-.43-1.2-.69-1.94-.69-1.55 0-2.8 1.25-2.8 2.8 0 1.4.91 2.58 2.18 2.77v-2.07h1.4v3.68h-1.2zm5.72-3.11c-.53.43-1.2.69-1.94.69-1.55 0-2.8-1.25-2.8-2.8s1.25-2.8 2.8-2.8c.74 0 1.41.26 1.94.69l1.03-1.03c-.81-.66-1.84-1.06-2.97-1.06-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8c1.13 0 2.16-.4 2.97-1.06l-1.03-1.03z"/>
  </svg>
);

const LeetCodeIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.77 9.77a1.375 1.375 0 0 0 0 1.945l1.944 1.945a1.375 1.375 0 0 0 1.945 0l7.828-7.828a1.373 1.373 0 0 0 0-1.945L14.444.414a1.374 1.374 0 0 0-.961-.414zM12 9.29a1.286 1.286 0 0 0-.91.376l-1.928 1.928a1.286 1.286 0 0 0 0 1.82l1.928 1.928c.503.503 1.317.503 1.82 0l1.928-1.928a1.286 1.286 0 0 0 0-1.82l-1.928-1.928A1.286 1.286 0 0 0 12 9.29zM23.973 12.001a1.286 1.286 0 0 0-.376-.91l-1.928-1.928a1.286 1.286 0 0 0-1.82 0l-1.928 1.928a1.286 1.286 0 0 0 0 1.82l1.928 1.928c.503.503 1.317.503 1.82 0l1.928-1.928a1.286 1.286 0 0 0 .376-.91z"/>
  </svg>
);

export const Contact = () => {
  const formRef = useRef();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, () => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <SectionWrapper id="contact" title="Let’s Build Something Scalable." subtitle="04. Contact & Collaboration">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-primary font-heading tracking-tight leading-tight">
              Open to solving <span className="text-accent-cyan italic underline decoration-accent-cyan/10 decoration-wavy underline-offset-8">real-world engineering</span> problems.
            </h3>
            <p className="text-secondary text-lg leading-relaxed font-light max-w-lg">
              I’m actively looking for opportunities to build scalable systems and contribute to impactful products. Whether it’s backend engineering, full-stack development, or system design challenges — I focus on writing efficient, maintainable, and production-ready code.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-6 group cursor-pointer" onClick={handleCopy}>
              <div className="p-4 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-accent-cyan group-hover:bg-accent-cyan group-hover:text-background transition-all duration-300">
                <Mail size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-1">Direct Email</span>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-primary font-heading group-hover:text-accent-cyan transition-colors">
                    {profile.email}
                  </span>
                  {copied ? <CheckCircle2 size={16} className="text-accent-cyan" /> : <Copy size={16} className="text-secondary opacity-30 shrink-0" />}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-3xl border border-white/5 bg-white/[0.02]">
              <div className="p-4 bg-accent-purple/10 border border-accent-purple/20 rounded-2xl text-accent-purple">
                <MapPin size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-1">Location</span>
                <span className="text-lg font-bold text-primary font-heading">NIT Calicut, Kerala, India</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 pt-2">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-accent-purple hover:border-accent-purple/40 transition-all hover:-translate-y-1" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profile.socials.geeksforgeeks} target="_blank" rel="noreferrer" className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-green-500 hover:border-green-500/40 transition-all hover:-translate-y-1" aria-label="GFG">
              <GFGIcon size={20} />
            </a>
            <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-orange-500 hover:border-orange-500/40 transition-all hover:-translate-y-1" aria-label="LeetCode">
              <LeetCodeIcon size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <Card className="w-full lg:w-1/2 p-10 md:p-12 border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-secondary uppercase tracking-[0.2em] pl-2 font-bold opacity-60">Identity</label>
                <input 
                  type="text" 
                  name="user_name"
                  placeholder="Your Name" 
                  required
                  className="w-full bg-background/50 border border-white/10 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 outline-none rounded-2xl px-5 py-4 text-primary text-sm transition-all"
                  disabled={status === 'sending' || status === 'success'}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-secondary uppercase tracking-[0.2em] pl-2 font-bold opacity-60">Contact Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  placeholder="name@email.com" 
                  required
                  className="w-full bg-background/50 border border-white/10 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 outline-none rounded-2xl px-5 py-4 text-primary text-sm transition-all"
                  disabled={status === 'sending' || status === 'success'}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-secondary uppercase tracking-[0.2em] pl-2 font-bold opacity-60">Project / Opportunity Details</label>
              <textarea 
                name="message"
                placeholder="Describe the opportunity, collaboration, or system you’d like to build..." 
                required
                rows={4}
                className="w-full bg-background/50 border border-white/10 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 outline-none rounded-2xl px-5 py-4 text-primary text-sm transition-all resize-none"
                disabled={status === 'sending' || status === 'success'}
              />
            </div>

            <Button 
                type="submit" 
                variant={status === 'success' ? 'primary' : 'glow'} 
                size="lg"
                disabled={status === 'sending' || status === 'success'} 
                className="w-full font-bold uppercase tracking-widest text-xs py-5 rounded-2xl"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="mr-3 animate-spin" />
                  SENDING REQUEST...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={16} className="mr-3" />
                  MESSAGE SENT SUCCESSFULLY
                </>
              ) : status === 'error' ? (
                "FAILED... RETRY"
              ) : (
                <>
                  <MessageSquare size={16} className="mr-3" />
                  SEND MESSAGE
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </SectionWrapper>
  );
};