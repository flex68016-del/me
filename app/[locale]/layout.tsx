import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "../globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = 'https://amankwaah-prince.vercel.app'; // [À COMPLÉTER: Remplacer par votre domaine réel]

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    fr: 'AMANKWAAH Duah Prince Yao - Développeur Web',
    en: 'AMANKWAAH Duah Prince Yao - Web Developer'
  };

  const descriptions = {
    fr: 'Développeur web autodidacte basé à Lomé, Togo. Next.js, TypeScript, Tailwind. Livraison de produits web réels pour de vraies communautés.',
    en: 'Self-taught web developer based in Lomé, Togo. Next.js, TypeScript, Tailwind. Delivering real web products for real communities.'
  };

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    metadataBase: new URL(baseUrl),
    icons: {
      icon: '/logo.png',
      apple: '/logo.png',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'fr': `${baseUrl}/fr`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      url: `${baseUrl}/${locale}`,
      siteName: 'AMANKWAAH Duah Prince Yao',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/2.png',
          width: 1200,
          height: 630,
          alt: titles[locale as keyof typeof titles],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: ['/2.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'AMANKWAAH Duah Prince Yao',
    jobTitle: locale === 'fr' ? 'Développeur Web' : 'Web Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lomé',
      addressCountry: 'TG',
    },
    email: 'yao.amankwaah@yahoo.com',
    url: baseUrl,
    sameAs: [
      'https://www.linkedin.com/in/duah-prince-yao-amankwaah/',
      'https://github.com/flex68016-del',
    ],
  };

  return (
    <html lang={locale} className={`${rajdhani.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#14161A] text-[#EDEAE3] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
