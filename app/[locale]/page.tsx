'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/lib/useTranslations';
import Header from '@/components/Header';
import JournalEntry, { JournalEntryProps } from '@/components/JournalEntry';
import { Mail, MessageCircle, Link, Code } from 'lucide-react';
import Image from 'next/image';

const projects: JournalEntryProps[] = [
  {
    title: 'Portfolio GBO Koami Gnona',
    status: 'prod',
    date: '2026-07',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    role: 'Full Stack',
    liveUrl: 'https://gbokoami.vercel.app',
    description: 'Portfolio pour un topographe (DGIGC, Lomé). SEO complet (JSON-LD, sitemap, robots, mots-clés locaux).',
  },
  {
    title: "Queen's Design",
    status: 'prod',
    date: '2026-07',
    stack: ['HTML/CSS/JS', 'SVG'],
    role: 'Full Stack',
    liveUrl: 'https://queens-design.vercel.app',
    description: 'Site vitrine pour un studio de formation artisanale à Lomé (@queensdesign). Palette inspirée du textile, CTA WhatsApp, éléments SVG animés.',
  },
  {
    title: 'Winterfest Togo 2026',
    status: 'prod',
    date: '2026-06',
    stack: ['HTML/CSS/JS', 'i18n', 'Vercel'],
    role: 'Full Stack',
    liveUrl: 'https://winterfesttogo.org',
    description: 'Site événementiel pour un festival (20-22 août 2026, Palais des Congrès de Lomé). Bilingue FR/EN, stream YouTube live, partage social, Google Maps intégré.',
  },
  {
    title: 'Flambeau Foot',
    status: 'prod',
    date: '2026-04',
    stack: ['Next.js', 'React', 'Tailwind'],
    role: 'Full Stack',
    liveUrl: 'https://flambeau-foot.vercel.app',
    description: 'Site pour une académie de football (ACF Flambeau).',
  },
  {
    title: "Flambeau du Réveil",
    status: 'prod',
    date: '2026-04',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'Web3Forms'],
    role: 'Full Stack',
    liveUrl: 'https://flambeaureveil.vercel.app',
    description: 'Refonte du site d\'un ministère chrétien. Formulaire de contact, carrousel hero personnalisé.',
  },
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section id="hero" className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* File tabs */}
        <div className="flex items-center gap-1 mb-0 border-b border-[#30363D] bg-[#161B22] rounded-t-lg overflow-x-auto">
          <div className="px-4 py-2 bg-[#0D1117] border-b-2 border-[#58A6FF] text-[#C9D1D9] text-sm font-mono whitespace-nowrap">
            hero.tsx ●
          </div>
          <div className="px-4 py-2 text-[#8B949E] text-sm font-mono whitespace-nowrap hover:text-[#C9D1D9] cursor-pointer">
            about.tsx
          </div>
          <div className="px-4 py-2 text-[#8B949E] text-sm font-mono whitespace-nowrap hover:text-[#C9D1D9] cursor-pointer">
            projects.tsx
          </div>
          <div className="px-4 py-2 text-[#8B949E] text-sm font-mono whitespace-nowrap hover:text-[#C9D1D9] cursor-pointer">
            contact.tsx
          </div>
        </div>
        
        {/* Code editor */}
        <div className="bg-[#0D1117] border border-[#30363D] border-t-0 rounded-b-lg p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm md:text-base"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Code content */}
              <div className="flex-1 space-y-4">
                <div>
                  <span className="text-[#FF7B72]">import</span>
                  <span className="text-[#C9D1D9]"> </span>
                  <span className="text-[#FFA657]">{`{ Developer }`}</span>
                  <span className="text-[#C9D1D9]"> </span>
                  <span className="text-[#FF7B72]">from</span>
                  <span className="text-[#A5D6FF]"> './profile'</span>
                </div>
                
                <div className="text-[#8B949E]">// Full Stack Developer • Lomé, Togo → Gatineau, Québec</div>
                
                <div>
                  <span className="text-[#FF7B72]">const</span>
                  <span className="text-[#C9D1D9]"> </span>
                  <span className="text-[#FFA657]">AMANKWAAH</span>
                  <span className="text-[#C9D1D9]"> </span>
                  <span className="text-[#FF7B72]">=</span>
                  <span className="text-[#C9D1D9]"> </span>
                  <span className="text-[#FF7B72]">{`{`}</span>
                </div>
                
                <div className="pl-4">
                  <div>
                    <span className="text-[#79C0FF]">role</span>
                    <span className="text-[#C9D1D9]">: </span>
                    <span className="text-[#A5D6FF]">'Full Stack Developer'</span>
                    <span className="text-[#8B949E]">,</span>
                  </div>
                  <div>
                    <span className="text-[#79C0FF]">location</span>
                    <span className="text-[#C9D1D9]">: </span>
                    <span className="text-[#A5D6FF]">'Lomé, Togo'</span>
                    <span className="text-[#8B949E]">,</span>
                  </div>
                  <div>
                    <span className="text-[#79C0FF]">stack</span>
                    <span className="text-[#C9D1D9]">: [</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A5D6FF]">'Next.js'</span>
                    <span className="text-[#8B949E]">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A5D6FF]">'TypeScript'</span>
                    <span className="text-[#8B949E]">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A5D6FF]">'Tailwind'</span>
                    <span className="text-[#8B949E]">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A5D6FF]">'Supabase'</span>
                  </div>
                  <div>
                    <span className="text-[#C9D1D9]">],</span>
                  </div>
                  <div>
                    <span className="text-[#79C0FF]">vibe</span>
                    <span className="text-[#C9D1D9]">: </span>
                    <span className="text-[#A5D6FF]">'Windsurf • Cascade • Cursor • VS Code'</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-[#C9D1D9]">{`}`}</span>
                </div>
                
                <div className="pt-4">
                  <span className="text-[#FF7B72]">export</span>
                  <span className="text-[#FF7B72]"> default</span>
                  <span className="text-[#FFA657]"> function</span>
                  <span className="text-[#D2A8FF]"> Portfolio</span>
                  <span className="text-[#C9D1D9]">() </span>
                  <span className="text-[#FF7B72">{`{`}</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-[#FF7B72]">return</span>
                  <span className="text-[#C9D1D9]"> (</span>
                </div>
                
                <div className="pl-8">
                  <span className="text-[#FF7B72]">&lt;</span>
                  <span className="text-[#FFA657]">Hero</span>
                </div>
                <div className="pl-12">
                  <span className="text-[#79C0FF]">tagline</span>
                  <span className="text-[#C9D1D9]">=</span>
                  <span className="text-[#A5D6FF]">"{t.hero.title}"</span>
                </div>
                <div className="pl-12">
                  <span className="text-[#79C0FF]">deployed</span>
                  <span className="text-[#C9D1D9]">=</span>
                  <span className="text-[#79C0FF]">{`{${projects.filter(p => p.status === 'prod').length}}`}</span>
                </div>
                <div className="pl-8">
                  <span className="text-[#FF7B72]">/&gt;</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-[#C9D1D9]">)</span>
                </div>
                <div>
                  <span className="text-[#C9D1D9]">{`}`}</span>
                </div>
              </div>
              
              {/* Portrait as "import" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="border border-[#30363D] rounded-lg overflow-hidden w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src="/2.png"
                    alt="AMANKWAAH Duah Prince Yao"
                    fill
                    priority
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover"
                  />
                </div>
                <div className="text-xs text-[#8B949E] mt-2 font-mono">// import photo from './assets'</div>
              </motion.div>
            </div>
            
            {/* CTAs as function calls */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#238636] text-[#C9D1D9] font-mono text-sm rounded hover:bg-[#2EA043] transition-colors border border-[#238636]"
              >
                exploreProjects()
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-[#1F6FEB] text-[#C9D1D9] font-mono text-sm rounded hover:bg-[#388BFD] transition-colors border border-[#1F6FEB]"
              >
                openTerminal()
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* File tab */}
          <div className="flex items-center gap-1 mb-4 border-b border-[#30363D] bg-[#161B22] rounded-t-lg">
            <div className="px-4 py-2 bg-[#0D1117] border-b-2 border-[#58A6FF] text-[#C9D1D9] text-sm font-mono">
              about.tsx ●
            </div>
          </div>
          
          {/* Code editor */}
          <div className="bg-[#0D1117] border border-[#30363D] border-t-0 rounded-b-lg p-6 md:p-8 font-mono text-sm">
            <div className="text-[#8B949E] mb-4">// Developer profile & tools</div>
            
            <div>
              <span className="text-[#FF7B72]">interface</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FFA657]">About</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FF7B72">{`{`}</span>
            </div>
            
            <div className="pl-4">
              <div>
                <span className="text-[#79C0FF]">description</span>
                <span className="text-[#C9D1D9]">: </span>
                <span className="text-[#A5D6FF]">"</span>
                <span className="text-[#C9D1D9]">{t.about.description}</span>
                <span className="text-[#A5D6FF]">"</span>
              </div>
            </div>
            
            <div>
              <span className="text-[#C9D1D9]">{`}`}</span>
            </div>
            
            <div className="mt-6">
              <span className="text-[#FF7B72]">const</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FFA657]">tools</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FF7B72]">=</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FF7B72]">{`{`}</span>
            </div>
            
            <div className="pl-4">
              <div>
                <span className="text-[#79C0FF]">daily</span>
                <span className="text-[#C9D1D9]">: </span>
                <span className="text-[#A5D6FF]">"</span>
                <span className="text-[#C9D1D9]">{t.about.tools_list}</span>
                <span className="text-[#A5D6FF]">"</span>
              </div>
            </div>
            
            <div>
              <span className="text-[#C9D1D9]">{`}`}</span>
            </div>
            
            <div className="mt-6">
              <span className="text-[#FF7B72]">const</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FFA657]">location</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FF7B72]">=</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#A5D6FF]">"</span>
              <span className="text-[#C9D1D9]">{t.about.location}</span>
              <span className="text-[#A5D6FF]">"</span>
            </div>
            
            <div className="mt-4 text-[#8B949E]">
              // {t.about.ambition}
            </div>
          </div>
        </motion.div>
      </section>

      {/* COMPÉTENCES */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* File tab */}
          <div className="flex items-center gap-1 mb-4 border-b border-[#30363D] bg-[#161B22] rounded-t-lg">
            <div className="px-4 py-2 bg-[#0D1117] border-b-2 border-[#58A6FF] text-[#C9D1D9] text-sm font-mono">
              skills.tsx ●
            </div>
          </div>
          
          {/* Code editor */}
          <div className="bg-[#0D1117] border border-[#30363D] border-t-0 rounded-b-lg p-6 md:p-8 font-mono text-sm">
            <div className="text-[#8B949E] mb-4">// Technical capabilities</div>
            
            <div>
              <span className="text-[#FF7B72]">interface</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FFA657]">Skills</span>
              <span className="text-[#C9D1D9]"> </span>
              <span className="text-[#FF7B72">{`{`}</span>
            </div>
            
            <div className="pl-4">
              <div>
                <span className="text-[#79C0FF]">frontend</span>
                <span className="text-[#C9D1D9]">: </span>
                <span className="text-[#C9D1D9]">[</span>
                <span className="text-[#A5D6FF]">'Next.js'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'React'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'TypeScript'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Tailwind CSS'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Framer Motion'</span>
                <span className="text-[#C9D1D9]">]</span>
              </div>
              
              <div>
                <span className="text-[#79C0FF]">integrations</span>
                <span className="text-[#C9D1D9]">: </span>
                <span className="text-[#C9D1D9]">[</span>
                <span className="text-[#A5D6FF]">'Supabase'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Prisma'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Web3Forms'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Mobile Money'</span>
                <span className="text-[#C9D1D9]">]</span>
              </div>
              
              <div>
                <span className="text-[#79C0FF]">seo_i18n</span>
                <span className="text-[#C9D1D9]">: </span>
                <span className="text-[#C9D1D9]">[</span>
                <span className="text-[#A5D6FF]">'sitemap.xml'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'robots.txt'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'JSON-LD'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'i18n FR/EN'</span>
                <span className="text-[#C9D1D9]">]</span>
              </div>
              
              <div>
                <span className="text-[#79C0FF]">pm</span>
                <span className="text-[#C9D1D9]">: </span>
                <span className="text-[#C9D1D9]">[</span>
                <span className="text-[#A5D6FF]">'Découpage en phases'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Roadmapping'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Trello'</span>
                <span className="text-[#C9D1D9]">]</span>
              </div>
              
              <div>
                <span className="text-[#79C0FF]">deployment</span>
                <span className="text-[#C9D1D9]">: </span>
                <span className="text-[#C9D1D9]">[</span>
                <span className="text-[#A5D6FF]">'Vercel'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Netlify'</span>
                <span className="text-[#8B949E]">,</span>
                <span className="text-[#A5D6FF]">'Git'</span>
                <span className="text-[#C9D1D9]">]</span>
              </div>
            </div>
            
            <div>
              <span className="text-[#C9D1D9]">{`}`}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* File tab */}
          <div className="flex items-center gap-1 mb-4 border-b border-[#30363D] bg-[#161B22] rounded-t-lg">
            <div className="px-4 py-2 bg-[#0D1117] border-b-2 border-[#58A6FF] text-[#C9D1D9] text-sm font-mono">
              projects.tsx ●
            </div>
          </div>
          
          {/* Code editor */}
          <div className="bg-[#0D1117] border border-[#30363D] border-t-0 rounded-b-lg p-6 md:p-8 font-mono text-sm space-y-6">
            <div className="text-[#8B949E]">// Deployed components</div>
            
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <span className="text-[#FF7B72]">export</span>
                  <span className="text-[#FF7B72]"> default</span>
                  <span className="text-[#FFA657]"> function</span>
                  <span className="text-[#D2A8FF]"> {project.title.replace(/\s+/g, '')}</span>
                  <span className="text-[#C9D1D9]">() </span>
                  <span className="text-[#FF7B72">{`{`}</span>
                </div>
                
                <div className="pl-4">
                  <div>
                    <span className="text-[#FF7B72]">return</span>
                    <span className="text-[#C9D1D9]"> (</span>
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-[#FF7B72]">&lt;</span>
                    <span className="text-[#FFA657]">Project</span>
                  </div>
                  
                  <div className="pl-8">
                    <span className="text-[#79C0FF]">status</span>
                    <span className="text-[#C9D1D9]">=</span>
                    <span className="text-[#79C0FF]">"</span>
                    <span className="text-[#3FB950]">{project.status === 'prod' ? '✓ Deployed' : '⚠ WIP'}</span>
                    <span className="text-[#79C0FF]">"</span>
                  </div>
                  
                  <div className="pl-8">
                    <span className="text-[#79C0FF]">date</span>
                    <span className="text-[#C9D1D9]">=</span>
                    <span className="text-[#79C0FF]">"</span>
                    <span className="text-[#C9D1D9]">{project.date}</span>
                    <span className="text-[#79C0FF]">"</span>
                  </div>
                  
                  <div className="pl-8">
                    <span className="text-[#79C0FF]">stack</span>
                    <span className="text-[#C9D1D9]">=</span>
                    <span className="text-[#C9D1D9]">[</span>
                    <span className="text-[#A5D6FF]">{project.stack.map(s => `'${s}'`).join(', ')}</span>
                    <span className="text-[#C9D1D9]">]</span>
                  </div>
                  
                  {project.description && (
                    <div className="pl-8 text-[#8B949E]">
                      // {project.description}
                    </div>
                  )}
                  
                  <div className="pl-8">
                    <span className="text-[#79C0FF]">liveUrl</span>
                    <span className="text-[#C9D1D9]">=</span>
                    <span className="text-[#79C0FF]">"</span>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#58A6FF] hover:underline"
                      >
                        {project.liveUrl}
                      </a>
                    ) : (
                      <span className="text-[#8B949E]">null</span>
                    )}
                    <span className="text-[#79C0FF]">"</span>
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-[#FF7B72]">/&gt;</span>
                  </div>
                  
                  <div>
                    <span className="text-[#C9D1D9]">)</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-[#C9D1D9]">{`}`}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* File tab */}
          <div className="flex items-center gap-1 mb-4 border-b border-[#30363D] bg-[#161B22] rounded-t-lg">
            <div className="px-4 py-2 bg-[#0D1117] border-b-2 border-[#58A6FF] text-[#C9D1D9] text-sm font-mono">
              services.tsx ●
            </div>
          </div>
          
          {/* Code editor */}
          <div className="bg-[#0D1117] border border-[#30363D] border-t-0 rounded-b-lg p-6 md:p-8 font-mono text-sm">
            <div className="text-[#8B949E] mb-4">// Available services</div>
            
            {[
              { title: t.services.service_1_title, desc: t.services.service_1_desc },
              { title: t.services.service_2_title, desc: t.services.service_2_desc },
              { title: t.services.service_3_title, desc: t.services.service_3_desc },
              { title: t.services.service_4_title, desc: t.services.service_4_desc },
              { title: t.services.service_5_title, desc: t.services.service_5_desc },
              { title: t.services.service_6_title, desc: t.services.service_6_desc },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div>
                  <span className="text-[#FF7B72]">function</span>
                  <span className="text-[#D2A8FF]"> {service.title.replace(/\s+/g, '')}</span>
                  <span className="text-[#C9D1D9]">(</span>
                  <span className="text-[#FFA657]">params</span>
                  <span className="text-[#C9D1D9]">: </span>
                  <span className="text-[#FFA657]">ServiceParams</span>
                  <span className="text-[#C9D1D9]">) </span>
                  <span className="text-[#FF7B72">{`{`}</span>
                </div>
                
                <div className="pl-4">
                  <div>
                    <span className="text-[#FF7B72]">return</span>
                    <span className="text-[#C9D1D9]"> </span>
                    <span className="text-[#A5D6FF]">"</span>
                    <span className="text-[#C9D1D9]">{service.desc}</span>
                    <span className="text-[#A5D6FF]">"</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-[#C9D1D9]">{`}`}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* File tab */}
          <div className="flex items-center gap-1 mb-4 border-b border-[#30363D] bg-[#161B22] rounded-t-lg">
            <div className="px-4 py-2 bg-[#0D1117] border-b-2 border-[#58A6FF] text-[#C9D1D9] text-sm font-mono">
              contact.tsx ●
            </div>
          </div>
          
          {/* Code editor / Terminal */}
          <div className="bg-[#0D1117] border border-[#30363D] border-t-0 rounded-b-lg p-6 md:p-8 font-mono text-sm">
            <div className="text-[#8B949E] mb-4">// Contact commands</div>
            
            <div className="space-y-4">
              <div>
                <span className="text-[#79C0FF]">$</span>
                <span className="text-[#C9D1D9]"> </span>
                <a
                  href="mailto:yao.amankwaah@yahoo.com"
                  className="text-[#58A6FF] hover:underline"
                >
                  email --to="yao.amankwaah@yahoo.com"
                </a>
              </div>
              
              <div>
                <span className="text-[#79C0FF]">$</span>
                <span className="text-[#C9D1D9]"> </span>
                <a
                  href="https://wa.me/22890318714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58A6FF] hover:underline"
                >
                  whatsapp --number="+22890318714"
                </a>
              </div>
              
              <div>
                <span className="text-[#79C0FF]">$</span>
                <span className="text-[#C9D1D9]"> </span>
                <a
                  href="https://www.linkedin.com/in/duah-prince-yao-amankwaah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58A6FF] hover:underline"
                >
                  linkedin --profile="duah-prince-yao-amankwaah"
                </a>
              </div>
              
              <div>
                <span className="text-[#79C0FF]">$</span>
                <span className="text-[#C9D1D9]"> </span>
                <a
                  href="https://github.com/flex68016-del"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58A6FF] hover:underline"
                >
                  github --user="flex68016-del"
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#30363D]">
              <div className="text-[#8B949E] mb-2">// Status</div>
              <div>
                <span className="text-[#79C0FF]">const</span>
                <span className="text-[#C9D1D9]"> </span>
                <span className="text-[#FFA657]">availability</span>
                <span className="text-[#C9D1D9]"> </span>
                <span className="text-[#FF7B72]">=</span>
                <span className="text-[#C9D1D9]"> </span>
                <span className="text-[#A5D6FF]">"</span>
                <span className="text-[#3FB950]">{t.contact.availability}</span>
                <span className="text-[#A5D6FF]">"</span>
              </div>
              
              <div className="mt-4 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#58A6FF]">
                  <Image
                    src="/2.png"
                    alt="AMANKWAAH Duah Prince Yao"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div>
                    <span className="text-[#79C0FF]">const</span>
                    <span className="text-[#C9D1D9]"> </span>
                    <span className="text-[#FFA657]">name</span>
                    <span className="text-[#C9D1D9]"> </span>
                    <span className="text-[#FF7B72]">=</span>
                    <span className="text-[#C9D1D9]"> </span>
                    <span className="text-[#A5D6FF]">"</span>
                    <span className="text-[#C9D1D9]">AMANKWAAH Duah Prince Yao</span>
                    <span className="text-[#A5D6FF]">"</span>
                  </div>
                  <div className="text-[#8B949E]">
                    // {t.contact_role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1D2024]">
        <p className="text-center text-sm text-[#8B8F96]">
          {t.footer.made_by} {t.footer.name}
        </p>
      </footer>
    </div>
  );
}
