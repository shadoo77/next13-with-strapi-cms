import { z } from 'zod';
import { config } from '@/config';

const formatElement = z
  .object({
    name: z.string(),
    hash: z.string(),
    ext: z.string(),
    width: z.number(),
    height: z.number(),
    url: z.string()
  })
  .optional();

export const globalInfoSchema = z.object({
  id: z.number(),
  siteTitle: z.string(),
  siteDescription: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  locale: z.string(),
  inMaintenance: z.boolean(),
  canonicalUrl: z.string(),
  maintenanceCard: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      id: z.number(),
      url: z.string(),
      alternativeText: z.string(),
      caption: z.string(),
      width: z.number(),
      height: z.number(),
      formats: z.object({
        thumbnail: formatElement,
        small: formatElement
      })
    })
  }),
  siteLogo: z.object({
    id: z.number(),
    url: z.string(),
    alternativeText: z.string(),
    caption: z.string(),
    width: z.number(),
    height: z.number(),
    formats: z.object({
      thumbnail: formatElement,
      small: formatElement,
      large: formatElement,
      medium: formatElement
    })
  }),
  fontFamily: z.string(),
  borderRadius: z.number(),
  outlinedFilled: z.boolean(),
  navType: z.enum(['light', 'dark']),
  presetColor: z.enum(['default', 'theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6'])
});

export type GlobalInfo = z.infer<typeof globalInfoSchema>;

export type MaintenanceCard = GlobalInfo['maintenanceCard'];

export const fallback: GlobalInfo = {
  id: 1,
  siteTitle: 'My App',
  siteDescription: 'This is the description of my application',
  createdAt: '2023-06-16T09:33:25.235Z',
  updatedAt: '2023-06-16T09:53:54.631Z',
  publishedAt: '2023-06-16T09:47:51.703Z',
  locale: 'en',
  inMaintenance: false,
  canonicalUrl: '/',
  maintenanceCard: {
    id: 4,
    title: 'Site is in maintenance',
    description: 'We will be back soon, please check again later on!',
    image: {
      id: 9,
      url: 'https://res.cloudinary.com/strapi-headless-app/image/upload/v1686839329/istockphoto_660743430_612x612_165ee34a59.jpg',
      alternativeText: 'site-logo',
      caption: 'site logo',
      width: 612,
      height: 324,
      formats: {
        thumbnail: {
          name: 'thumbnail_istockphoto-660743430-612x612.jpg',
          hash: 'thumbnail_istockphoto_660743430_612x612_165ee34a59',
          ext: '.jpg',
          width: 245,
          height: 130,
          url: 'https://res.cloudinary.com/strapi-headless-app/image/upload/v1686839329/thumbnail_istockphoto_660743430_612x612_165ee34a59.jpg'
        },
        small: {
          name: 'small_istockphoto-660743430-612x612.jpg',
          hash: 'small_istockphoto_660743430_612x612_165ee34a59',
          ext: '.jpg',
          width: 500,
          height: 265,
          url: 'https://res.cloudinary.com/strapi-headless-app/image/upload/v1686839329/small_istockphoto_660743430_612x612_165ee34a59.jpg'
        }
      }
    }
  },
  siteLogo: {
    id: 10,
    url: 'https://res.cloudinary.com/strapi-headless-app/image/upload/v1687268359/Untitled_406400d372.png',
    alternativeText: 'Sells Advies',
    caption: 'Sells Advies',
    width: 1400,
    height: 980,
    formats: {
      thumbnail: {
        name: 'thumbnail_Untitled.png',
        hash: 'thumbnail_Untitled_406400d372',
        ext: '.png',
        width: 223,
        height: 156,
        url: 'https://res.cloudinary.com/strapi-headless-app/image/upload/v1687268359/thumbnail_Untitled_406400d372.png'
      },
      small: {
        name: 'small_Untitled.png',
        hash: 'small_Untitled_406400d372',
        ext: '.png',
        width: 500,
        height: 350,
        url: 'https://res.cloudinary.com/strapi-headless-app/image/upload/v1687268359/small_Untitled_406400d372.png'
      },
      medium: {
        name: 'medium_Untitled.png',
        hash: 'medium_Untitled_406400d372',
        ext: '.png',
        width: 750,
        height: 525,
        url: 'https://res.cloudinary.com/strapi-headless-app/image/upload/v1687268359/medium_Untitled_406400d372.png'
      },
      large: {
        name: 'large_Untitled.png',
        hash: 'large_Untitled_406400d372',
        ext: '.png',
        width: 1000,
        height: 700,
        url: 'https://res.cloudinary.com/strapi-headless-app/image/upload/v1687268359/large_Untitled_406400d372.png'
      }
    }
  },
  ...config
};
