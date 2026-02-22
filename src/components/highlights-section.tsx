'use client';

import { motion } from 'framer-motion';
import type { HighlightItem } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  highlights: HighlightItem[];
}

export function HighlightsSection({ highlights }: Props) {
  const { locale, t } = useLocale();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#ee5b2b] to-[#f59e0b] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {t('highlights.title')}
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const label = locale === 'en' && item.labelEn ? item.labelEn : item.label;
            const value = locale === 'en' && item.valueEn ? item.valueEn : item.value;
            return (
              <motion.div
                key={i}
                className="text-center p-8 rounded-2xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur-xl hover:border-[#ee5b2b]/20 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#ee5b2b] to-[#f59e0b] bg-clip-text text-transparent mb-2">
                  {value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
