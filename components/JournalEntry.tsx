'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/lib/useTranslations';

export interface JournalEntryProps {
  title: string;
  status: 'prod' | 'in_progress';
  date: string;
  stack: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  description?: string;
  index?: number;
  isHero?: boolean;
}

export default function JournalEntry({
  title,
  status,
  date,
  stack,
  role,
  liveUrl,
  githubUrl,
  description,
  index = 0,
  isHero = false,
}: JournalEntryProps) {
  const t = useTranslations();

  const statusConfig = {
    prod: {
      label: t.projects.status_prod,
      color: 'bg-[#4E8B7C]',
      icon: '🟢',
    },
    in_progress: {
      label: t.projects.status_in_progress,
      color: 'bg-[#C4622D]',
      icon: '🟡',
    },
  };

  const config = statusConfig[status];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.1 }
    }
  };

  const badgeVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.5, delay: index * 0.1 + 0.3 }
    }
  };

  return (
    <motion.div
      variants={isHero ? variants : undefined}
      initial={isHero ? 'hidden' : undefined}
      animate={isHero ? 'visible' : undefined}
      className="border-l-2 border-[#1D2024] pl-4 py-2 hover:border-[#E7B65C] transition-colors"
    >
      <div className="flex items-start gap-3 flex-wrap">
        <span className="font-mono text-sm text-[#8B8F96] flex-shrink-0">
          {date}
        </span>
        <motion.span
          variants={isHero ? badgeVariants : undefined}
          initial={isHero ? 'hidden' : undefined}
          animate={isHero ? 'visible' : undefined}
          className={`${config.color} text-xs px-2 py-0.5 rounded font-mono flex-shrink-0`}
        >
          {config.icon} {config.label}
        </motion.span>
      </div>
      
      <h3 className="font-serif text-lg font-semibold mt-1 text-[#EDEAE3]">
        {title}
      </h3>
      
      {description && (
        <p className="text-[#8B8F96] text-sm mt-1 max-w-2xl">
          {description}
        </p>
      )}
      
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        <span className="text-xs text-[#8B8F96] font-mono">
          {t.projects.role}:
        </span>
        <span className="text-xs text-[#EDEAE3]">
          {role}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-1.5 mt-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-0.5 bg-[#1D2024] text-[#E7B65C] rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {(liveUrl || githubUrl) && (
        <div className="flex gap-3 mt-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#E7B65C] hover:text-[#E7B65C]/80 transition-colors font-mono"
            >
              {t.projects.live} →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#8B8F96] hover:text-[#8B8F96]/80 transition-colors font-mono"
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
