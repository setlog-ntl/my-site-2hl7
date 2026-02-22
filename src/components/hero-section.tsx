'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

export function HeroSection({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { locale, t } = useLocale();
  const name = locale === 'en' && config.nameEn ? config.nameEn : config.name;
  const tagline = locale === 'en' && config.taglineEn ? config.taglineEn : config.tagline;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {config.heroImageUrl && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img
            src={config.heroImageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      )}

      {!config.heroImageUrl && (
        <>
          <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(238,91,43,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(245,158,11,0.08) 0%, transparent 60%)' }} />
          <div className="floating-orb" style={{ width: 400, height: 400, top: '10%', left: '5%', background: 'rgba(238,91,43,0.06)', animationDelay: '0s' }} />
          <div className="floating-orb" style={{ width: 300, height: 300, bottom: '15%', right: '10%', background: 'rgba(245,158,11,0.05)', animationDelay: '-7s' }} />
          <div className="floating-orb" style={{ width: 200, height: 200, top: '50%', left: '60%', background: 'rgba(238,91,43,0.04)', animationDelay: '-13s' }} />
        </>
      )}

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
        style={{ opacity }}
      >
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[#ee5b2b] via-[#f59e0b] to-[#ee5b2b] bg-[length:200%_auto] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {tagline}
        </motion.p>
        <motion.a
          href="#about"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#ee5b2b] to-[#f59e0b] text-white font-semibold text-lg shadow-lg shadow-[#ee5b2b]/20 hover:shadow-[#ee5b2b]/30 hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('hero.cta')}
        </motion.a>
      </motion.div>
    </section>
  );
}
