import { z } from 'zod';

const imageFormatElement = z
  .object({
    name: z.string(),
    hash: z.string(),
    ext: z.string(),
    width: z.number(),
    height: z.number(),
    url: z.string()
  })
  .optional();

export const maintenanceSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.object({
    url: z.string(),
    alternativeText: z.string(),
    caption: z.string(),
    width: z.number(),
    height: z.number(),
    formats: z.object({
      thumbnail: imageFormatElement,
      small: imageFormatElement,
      medium: imageFormatElement,
      large: imageFormatElement
    })
  })
});

export type MaintenanceInfo = z.infer<typeof maintenanceSchema>;

export const fallback: MaintenanceInfo = {
  title: 'Site is in maintenance',
  description: 'We will be back soon, please check again later on!',
  image: {
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
};
