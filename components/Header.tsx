'use client';

import { usePathname, useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from '@/lib/useTranslations';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params.locale as string) || 'fr';
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath}`);
  };

  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#14161A]/90 backdrop-blur-sm border-b border-[#1D2024]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-auto">
              <Image
                src="/logo.png"
                alt="AMANKWAAH Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <span className="font-serif font-semibold text-[#EDEAE3]">
              AMANKWAAH
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-[#8B8F96] hover:text-[#E7B65C] transition-colors"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => switchLocale('fr')}
              className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
                locale === 'fr'
                  ? 'bg-[#E7B65C] text-[#14161A]'
                  : 'text-[#8B8F96] hover:text-[#EDEAE3]'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
                locale === 'en'
                  ? 'bg-[#E7B65C] text-[#14161A]'
                  : 'text-[#8B8F96] hover:text-[#EDEAE3]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
