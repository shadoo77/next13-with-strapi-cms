'use client';

import { ENV } from '@/config/constants';
import { isSSR, isGtag } from '@/utils';

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const pageview = (url: string) => {
  if (!isSSR && isGtag) {
    window.gtag('config', ENV.GA_ID, {
      page_path: url
    });
  }
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (!isSSR && isGtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
