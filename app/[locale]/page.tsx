'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/lib/useTranslations';
import Header from '@/components/Header';
import JournalEntry, { JournalEntryProps } from '@/components/JournalEntry';
import { Mail, MessageCircle, Link, Code } from 'lucide-react';

const projects: JournalEntryProps[] = [
  {
    title: 'Winterfest Togo 2026',
    status: 'prod',
    date: '2025-08',
    stack: ['HTML/CSS/JS', 'i18n', 'Vercel'],
    role: 'Full Stack',
    liveUrl: 'https://winterfesttogo.org',
    description: 'Site événementiel pour un festival (20-22 août 2026, Palais des Congrès de Lomé). Bilingue FR/EN, stream YouTube live, partage social, Google Maps intégré.',
  },
  {
    title: 'Flambeau Foot',
    status: 'prod',
    date: '2025-06',
    stack: ['Next.js', 'React', 'Tailwind'],
    role: 'Full Stack',
    liveUrl: 'https://flambeau-foot.vercel.app',
    description: 'Site pour une académie de football (ACF Flambeau).',
  },
  {
    title: "Flambeau du Réveil",
    status: 'prod',
    date: '2025-04',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'Web3Forms'],
    role: 'Full Stack',
    liveUrl: 'https://flambeaureveil.vercel.app',
    description: 'Refonte du site d\'un ministère chrétien. Formulaire de contact, carrousel hero personnalisé.',
  },
  {
    title: 'Portfolio GBO Koami Gnona',
    status: 'prod',
    date: '2025-03',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    role: 'Full Stack',
    liveUrl: 'https://gbokoami.vercel.app',
    description: 'Portfolio pour un topographe (DGIGC, Lomé). SEO complet (JSON-LD, sitemap, robots, mots-clés locaux).',
  },
  {
    title: "Queen's Design",
    status: 'prod',
    date: '2025-02',
    stack: ['HTML/CSS/JS', 'SVG'],
    role: 'Full Stack',
    liveUrl: 'https://queens-design.vercel.app',
    description: 'Site vitrine pour un studio de formation artisanale à Lomé (@queensdesign). Palette inspirée du textile, CTA WhatsApp, éléments SVG animés.',
  },
];

export default function HomePage() {
  const t = useTranslations();

  const heroProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#EDEAE3] leading-tight max-w-4xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg text-[#8B8F96] max-w-2xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#E7B65C] text-[#14161A] font-medium rounded hover:bg-[#E7B65C]/80 transition-colors"
            >
              {t.hero.cta_projects}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#E7B65C] text-[#E7B65C] font-medium rounded hover:bg-[#E7B65C]/10 transition-colors"
            >
              {t.hero.cta_contact}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="font-mono text-sm text-[#8B8F96] mb-6">
            {t.hero.recent_deliveries}
          </h2>
          <div className="space-y-4">
            {heroProjects.map((project, index) => (
              <JournalEntry key={project.title} {...project} index={index} isHero />
            ))}
          </div>
        </motion.div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#1D2024]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl font-semibold text-[#EDEAE3] mb-6">
            {t.about.title}
          </h2>
          <p className="text-[#8B8F96] leading-relaxed max-w-3xl mb-8">
            {t.about.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-mono text-sm text-[#E7B65C] mb-2">
                {t.about.tools}
              </h3>
              <p className="text-[#EDEAE3]">{t.about.tools_list}</p>
            </div>
            <div>
              <h3 className="font-mono text-sm text-[#E7B65C] mb-2">
                {t.about.location}
              </h3>
              <p className="text-[#EDEAE3]">{t.about.location}</p>
              <p className="text-[#8B8F96] mt-1">{t.about.ambition}</p>
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
          <h2 className="font-serif text-3xl font-semibold text-[#EDEAE3] mb-12">
            {t.skills.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t.skills.frontend,
                items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS/JS'],
              },
              {
                title: t.skills.integrations,
                items: ['Supabase', 'Prisma', 'Web3Forms', 'Google Apps Script', 'Mobile Money (Flooz/T-Money)'],
              },
              {
                title: t.skills.seo_i18n,
                items: ['sitemap.xml', 'robots.txt', 'JSON-LD', 'i18n FR/EN', 'hreflang'],
              },
              {
                title: t.skills.pm,
                items: ['Découpage en phases', 'Roadmapping', 'Trello'],
              },
              {
                title: t.skills.deployment,
                items: ['Vercel', 'Netlify', 'Git'],
              },
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1D2024] p-6 rounded"
              >
                <h3 className="font-mono text-sm text-[#E7B65C] mb-4">
                  {skillGroup.title}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-[#EDEAE3] text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#1D2024]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl font-semibold text-[#EDEAE3] mb-2">
            {t.projects.title}
          </h2>
          <p className="font-mono text-sm text-[#8B8F96] mb-12">
            {t.projects.subtitle}
          </p>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <JournalEntry {...project} />
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
                  <img 
                    src="/logo.png" 
                    alt="AMANKWAAH Logo" 
                    className="h-12 w-auto"
                  />
                  <div>
                    <p className="font-serif text-lg font-semibold text-[#EDEAE3]">
                      AMANKWAAH Duah Prince Yao
                    </p>
                    <p className="text-sm text-[#8B8F96]">
                      Développeur Web • Lomé, Togo
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
