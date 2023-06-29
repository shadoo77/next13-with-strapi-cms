'use client';

import { ENV, isProduction } from '@/config/constants';
import { isSSR } from '@/utils';

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const pageview = (url: string) => {
  if (!isProduction) {
    return;
  }

  if (!isSSR && typeof window.gtag !== 'undefined') {
    window.gtag('config', ENV.GA_ID || '', {
      page_path: url
    });
  }
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (!isProduction) {
    return;
  }

  if (!isSSR && typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
