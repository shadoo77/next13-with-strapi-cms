import { z } from 'zod';

export const pageSchema = z.object({
  id: z.number(),
  date: z.string(),
  date_gmt: z.string(),
  guid: z.object({ rendered: z.string() }),
  modified: z.string(),
  modified_gmt: z.string(),
  slug: z.string(),
  status: z.string(),
  type: z.string(),
  link: z.string(),
  title: z.object({ rendered: z.string() }),
  content: z.object({ rendered: z.string() }),
  excerpt: z.object({ rendered: z.string(), protected: z.boolean() }),
  author: z.number(),
  featured_media: z.number(),
  parent: z.number(),
  menu_order: z.number(),
  comment_status: z.string(),
  ping_status: z.string(),
  template: z.string(),
  meta: z.array(z.unknown()),
  acf: z.array(z.unknown()),
  x_date: z.string(),
  x_author: z.string(),
  x_gravatar: z.string(),
  x_metadata: z.object({ pageKind: z.string(), _pageKind: z.string() }),
  _links: z.object({
    self: z.array(z.object({ href: z.string() })),
    collection: z.array(z.object({ href: z.string() })),
    about: z.array(z.object({ href: z.string() })),
    author: z.array(z.object({ embeddable: z.boolean(), href: z.string() })),
    replies: z.array(z.object({ embeddable: z.boolean(), href: z.string() })),
    'version-history': z.array(z.object({ count: z.number(), href: z.string() })),
    'predecessor-version': z.array(z.object({ id: z.number(), href: z.string() })),
    'wp:attachment': z.array(z.object({ href: z.string() })),
    curies: z.array(z.object({ name: z.string(), href: z.string(), templated: z.boolean() }))
  })
});

export const pagesSchema = z.array(pageSchema);

export type PageType = z.infer<typeof pageSchema> | Record<string, unknown>;
export type PagesType = z.infer<typeof pagesSchema>;

export const pageFallback = {
  id: 0,
  date: '2023-05-21T11:12:54',
  date_gmt: '2023-05-21T11:12:54',
  guid: { rendered: 'https://shadi.x10.mx/?page_id=12' },
  modified: '2023-05-21T14:29:06',
  modified_gmt: '2023-05-21T14:29:06',
  slug: 'home',
  status: 'publish',
  type: 'page',
  link: 'https://shadi.x10.mx/',
  title: { rendered: 'Home' },
  content: { rendered: '<p>this is home page</p>\n' },
  excerpt: { rendered: '<p>this is home page</p>\n', protected: false },
  author: 1,
  featured_media: 0,
  parent: 0,
  menu_order: 0,
  comment_status: 'closed',
  ping_status: 'closed',
  template: '',
  meta: [],
  acf: [],
  x_date: 'May 21, 2023',
  x_author: 'admin',
  x_gravatar: 'https://secure.gravatar.com/avatar/2f88aba7a67f857316049b905b0ec991?s=96&d=mm&r=g',
  x_metadata: { pageKind: 'home1', _pageKind: 'field_646a038791751' },
  _links: {
    self: [{ href: 'https://shadi.x10.mx/wp-json/wp/v2/pages/12' }],
    collection: [{ href: 'https://shadi.x10.mx/wp-json/wp/v2/pages' }],
    about: [{ href: 'https://shadi.x10.mx/wp-json/wp/v2/types/page' }],
    author: [{ embeddable: true, href: 'https://shadi.x10.mx/wp-json/wp/v2/users/1' }],
    replies: [{ embeddable: true, href: 'https://shadi.x10.mx/wp-json/wp/v2/comments?post=12' }],
    'version-history': [
      { count: 5, href: 'https://shadi.x10.mx/wp-json/wp/v2/pages/12/revisions' }
    ],
    'predecessor-version': [
      { id: 22, href: 'https://shadi.x10.mx/wp-json/wp/v2/pages/12/revisions/22' }
    ],
    'wp:attachment': [{ href: 'https://shadi.x10.mx/wp-json/wp/v2/media?parent=12' }],
    curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }]
  }
};
