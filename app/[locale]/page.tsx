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
      <section id="hero" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0891B2] to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0891B2] to-transparent" />
        </div>
        
        <div className="relative">
          {/* Control module frame */}
          <div className="border-2 border-[#F59E0B]/30 rounded-lg p-6 md:p-8 bg-[#1E3A8A]/20 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Portrait with geometric frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
              >
                <div className="absolute inset-0 border-2 border-[#F59E0B] rounded-lg rotate-3" />
                <div className="absolute inset-0 border-2 border-[#0891B2] rounded-lg -rotate-3" />
                <div className="absolute inset-2 overflow-hidden rounded-lg">
                  <Image
                    src="/2.png"
                    alt="AMANKWAAH Duah Prince Yao"
                    fill
                    priority
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 text-center lg:text-left"
              >
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FEF9E7] leading-tight mb-4">
                  {t.hero.title}
                </h1>
                <p className="text-lg text-[#FEF9E7]/80 max-w-2xl mb-6 font-sans">
                  {t.hero.subtitle}
                </p>
                
                {/* Stats module */}
                <div className="inline-flex items-center gap-4 bg-[#1F2937] px-4 py-2 rounded-lg border border-[#F59E0B]/50 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[#F59E0B]">●</span>
                    <span className="font-display text-sm text-[#FEF9E7]">
                      {projects.filter(p => p.status === 'prod').length} PROJETS
                    </span>
                  </div>
                  <div className="w-px h-4 bg-[#0891B2]" />
                  <div className="flex items-center gap-2">
                    <span className="text-[#0891B2]">●</span>
                    <span className="font-display text-sm text-[#FEF9E7]">
                      100% EN PROD
                    </span>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-[#F59E0B] text-[#1F2937] font-display font-semibold rounded hover:bg-[#F59E0B]/80 transition-colors"
                  >
                    {t.hero.cta_projects}
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 border-2 border-[#0891B2] text-[#0891B2] font-display font-semibold rounded hover:bg-[#0891B2]/10 transition-colors"
                  >
                    {t.hero.cta_contact}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#1E3A8A]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl font-bold text-[#FEF9E7] mb-6">
            {t.about.title}
          </h2>
          <p className="text-[#FEF9E7]/70 leading-relaxed max-w-3xl mb-8 font-sans">
            {t.about.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-[#1E3A8A]/50 rounded-lg p-4 bg-[#1F2937]/30">
              <h3 className="font-display text-sm text-[#F59E0B] mb-2">
                {t.about.tools}
              </h3>
              <p className="text-[#FEF9E7] font-sans">{t.about.tools_list}</p>
            </div>
            <div className="border border-[#1E3A8A]/50 rounded-lg p-4 bg-[#1F2937]/30">
              <h3 className="font-display text-sm text-[#F59E0B] mb-2">
                {t.about.location}
              </h3>
              <p className="text-[#FEF9E7]/70 mt-1 font-sans">{t.about.ambition}</p>
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
          <h2 className="font-display text-3xl font-bold text-[#FEF9E7] mb-2">
            {t.projects.title}
          </h2>
          <p className="font-sans text-sm text-[#FEF9E7]/70 mb-12">
            {t.projects.subtitle}
          </p>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection line */}
                {index < projects.length - 1 && (
                  <div className="absolute left-4 top-16 bottom-0 w-px bg-gradient-to-b from-[#F59E0B] via-[#0891B2] to-transparent" />
                )}
                
                {/* Module card */}
                <div className="border-2 border-[#1E3A8A]/50 rounded-lg p-6 bg-[#1F2937]/50 backdrop-blur-sm hover:border-[#F59E0B]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    {/* Status indicator */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E3A8A] border-2 border-[#F59E0B] flex items-center justify-center">
                      <span className="text-[#F59E0B] text-sm">
                        {project.status === 'prod' ? '●' : '○'}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-sm text-[#0891B2]">
                          {project.date}
                        </span>
                        <span className="px-2 py-0.5 bg-[#C2410C]/20 text-[#C2410C] text-xs font-display rounded">
                          {project.status === 'prod' ? 'EN PROD' : 'EN COURS'}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-xl font-bold text-[#FEF9E7] mb-2">
                        {project.title}
                      </h3>
                      
                      {project.description && (
                        <p className="text-[#FEF9E7]/70 text-sm mb-4 font-sans">
                          {project.description}
                        </p>
                      )}
                      
                      {/* Stack tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-display px-2 py-1 bg-[#1E3A8A]/30 text-[#F59E0B] rounded border border-[#F59E0B]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Links */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-[#0891B2] hover:text-[#0891B2]/80 transition-colors font-display"
                        >
                          <span>VOIR EN LIVE</span>
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  </div>
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
          <h2 className="font-serif text-3xl font-semibold text-[#EDEAE3] mb-2">
            {t.services.title}
          </h2>
          <p className="font-mono text-sm text-[#8B8F96] mb-12">
            {t.services.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
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
                className="bg-[#1D2024] p-6 rounded border-l-2 border-[#E7B65C]"
              >
                <h3 className="font-serif text-lg font-semibold text-[#EDEAE3] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#8B8F96] text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#1D2024]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl font-semibold text-[#EDEAE3] mb-2">
            {t.contact.title}
          </h2>
          <p className="font-mono text-sm text-[#8B8F96] mb-12">
            {t.contact.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <a
                href="mailto:yao.amankwaah@yahoo.com"
                className="flex items-center gap-4 p-4 bg-[#14161A] rounded-lg hover:bg-[#14161A]/80 transition-all group"
              >
                <div className="p-3 bg-[#E7B65C]/10 rounded-lg group-hover:bg-[#E7B65C]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#E7B65C]" />
                </div>
                <div>
                  <p className="text-xs text-[#8B8F96] font-mono mb-1">Email</p>
                  <p className="text-[#EDEAE3]">yao.amankwaah@yahoo.com</p>
                </div>
              </a>
              <a
                href="https://wa.me/22890318714"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#14161A] rounded-lg hover:bg-[#14161A]/80 transition-all group"
              >
                <div className="p-3 bg-[#4E8B7C]/10 rounded-lg group-hover:bg-[#4E8B7C]/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#4E8B7C]" />
                </div>
                <div>
                  <p className="text-xs text-[#8B8F96] font-mono mb-1">WhatsApp</p>
                  <p className="text-[#EDEAE3]">+228 90 31 87 14</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/duah-prince-yao-amankwaah/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#14161A] rounded-lg hover:bg-[#14161A]/80 transition-all group"
              >
                <div className="p-3 bg-[#E7B65C]/10 rounded-lg group-hover:bg-[#E7B65C]/20 transition-colors">
                  <Link className="w-5 h-5 text-[#E7B65C]" />
                </div>
                <div>
                  <p className="text-xs text-[#8B8F96] font-mono mb-1">LinkedIn</p>
                  <p className="text-[#EDEAE3]">linkedin.com/in/duah-prince-yao-amankwaah</p>
                </div>
              </a>
              <a
                href="https://github.com/flex68016-del"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#14161A] rounded-lg hover:bg-[#14161A]/80 transition-all group"
              >
                <div className="p-3 bg-[#8B8F96]/10 rounded-lg group-hover:bg-[#8B8F96]/20 transition-colors">
                  <Code className="w-5 h-5 text-[#8B8F96]" />
                </div>
                <div>
                  <p className="text-xs text-[#8B8F96] font-mono mb-1">GitHub</p>
                  <p className="text-[#EDEAE3]">github.com/flex68016-del</p>
                </div>
              </a>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-[#14161A] rounded-lg">
                <p className="text-[#8B8F96] leading-relaxed">
                  {t.contact.availability}
                </p>
              </div>
              <div className="p-6 bg-[#14161A] rounded-lg border-l-4 border-[#E7B65C]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="/2.png"
                      alt="AMANKWAAH Duah Prince Yao"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold text-[#EDEAE3]">
                      AMANKWAAH Duah Prince Yao
                    </p>
                    <p className="text-sm text-[#8B8F96]">
                      {t.contact_role}
                    </p>
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
