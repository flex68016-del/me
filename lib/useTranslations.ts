'use client';

import { useParams } from 'next/navigation';
import { translations } from './translations';

export function useTranslations() {
  const params = useParams();
  const locale = (params.locale as string) || 'fr';
  
  return translations[locale as keyof typeof translations] || translations.fr;
}
