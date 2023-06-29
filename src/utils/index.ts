import { ParsedUrlQuery } from 'querystring';
import pluralize from 'pluralize';
import { apiBaseURL, baseURL } from '@/config/constants';

// Check whether it's a server side or client side
export const isSSR = typeof window === 'undefined';

// Check gtag func
export const isGtag = !isSSR && typeof window.gtag !== 'undefined';

// Check if some variable, array or object is empty
export const isEmpty = <T>(value: T): boolean =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

// Get query string based on flatted object
export function getQueryString(params: ParsedUrlQuery | Record<string, unknown>) {
  if (!params) {
    return '';
  }
  const esc = encodeURIComponent;
  return `${Object.keys(params)
    .filter((param) => params[param] !== null && params[param] !== undefined)
    .map((param) => `${esc(param)}=${esc(params[param] as string)}`)
    .join('&')}`;
}

// Parse json safely
export const safelyParseJSON = (jsonString: string | null | undefined) => {
  if (!jsonString) {
    return null;
  }
  let parsed;
  try {
    parsed = JSON.parse(jsonString);
  } catch (e) {
    return null;
  }

  return parsed as Record<string, unknown>;
};

// Get parsed key from localStorage
export const getParsedItemFromLocalStorageByKey = (key: string) => {
  if (!isSSR) {
    const storedLocalStorage = localStorage.getItem(key);
    if (storedLocalStorage) {
      return safelyParseJSON(storedLocalStorage);
    }
  }
  return null;
};

// Get strapi media url
export function getStrapiMedia(url: string) {
  if (url == null) {
    return null;
  }
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }
  return `${baseURL || 'http://localhost:1337'}${url}`;
}

// Handle redirect function
export function handleRedirection({
  locale,
  preview,
  custom
}: {
  locale: string;
  preview?: boolean;
  custom?: string;
}) {
  // export function handleRedirection(locale: string, preview?: boolean, custom?: string | null) {
  if (preview) {
    return {
      redirect: {
        destination: `/api/exit-preview`,
        permanent: false
      }
    };
  }

  if (custom) {
    return {
      redirect: {
        destination: `/${locale}/${custom}`,
        permanent: false
      }
    };
  }

  return {
    redirect: {
      destination: `/${locale}/`,
      permanent: false
    }
  };
}

// Getting dataURL and slug
export function getData({
  slug,
  locale,
  apiID,
  kind,
  preview
}: {
  slug: string | string[];
  locale: string;
  apiID: string;
  kind: string;
  preview?: boolean;
}) {
  const previewParams = preview ? '&publicationState=preview&published_at_null=true' : '';

  if (kind == 'collectionType') {
    let prefix = `/${pluralize(apiID)}`;
    if (apiID == 'page') {
      prefix = ``;
    } else if (apiID == 'article') {
      prefix = `/blog`;
    }
    const slugToReturn = `${prefix}/${slug}?lang=${locale}`;
    const apiUrl = `/${pluralize(
      apiID
    )}?filters[slug][$eq]=${slug}&locale=${locale}${previewParams}&populate[blocks][populate]=members.picture,header,buttons.link,faq,featuresCheck,cards,pricingCards.perks,articles,restaurants,author.picture,images,cards.image,image&populate=localizations&populate[seo][populate]=metaSocial.image&populate[SEO]=*`;

    return {
      dataURL: apiBaseURL + apiUrl,
      slug: slugToReturn
    };
  } else {
    const apiUrl = `/${apiID}?locale=${locale}${previewParams}&populate[blocks][populate]=*,buttons.link&populate=localizations&populate[header]=*&populate[seo]=metaSocial`;

    if (apiID.includes('-page')) {
      const slugToReturn =
        apiID == 'blog-page'
          ? `/${apiID.replace('-page', '')}?lang=${locale}`
          : `/${apiID.replace('-page', 's')}?lang=${locale}`;
      return {
        dataURL: apiBaseURL + apiUrl,
        slug: slugToReturn
      };
    } else {
      return {
        dataURL: apiBaseURL + apiUrl,
        slug: `/${apiID}?lang=${locale}`
      };
    }
  }
}

// export async function getRestaurants(key) {
//   const categoryName = key.queryKey[1].category;
//   const placeName = key.queryKey[2].place;
//   const localeCode = key.queryKey[3].locale;
//   const pageNumber = key.queryKey[4].page;
//   const perPage = key.queryKey[5].perPage;
//   const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * perPage;

//   let baseUrl = getStrapiURL(
//     `/restaurants?pagination[limit]=${perPage}&pagination[start]=${start}&pagination[withCount]=true&populate=images,category,place,information,seo`
//   );

//   if (categoryName) {
//     baseUrl = `${baseUrl}&filters[category][name][$eq]=${categoryName}`;
//   }

//   if (placeName) {
//     baseUrl = `${baseUrl}&filters[place][name][$eq]=${placeName}`;
//   }

//   if (localeCode) {
//     baseUrl = `${baseUrl}&locale=${localeCode}`;
//   }

//   const res = await fetch(baseUrl);
//   const restaurants = await res.json();

//   return {
//     restaurants: restaurants.data,
//     count: restaurants.meta.pagination.total
//   };
// }

// export async function getArticles(key) {
//   const categoryName = key.queryKey[1].category;
//   const localeCode = key.queryKey[2].locale;
//   const pageNumber = key.queryKey[3].page;
//   const perPage = key.queryKey[4].perPage;

//   const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * perPage;

//   let baseUrl = getStrapiURL(
//     `/articles?pagination[limit]=${perPage}&pagination[start]=${start}&pagination[withCount]=true&populate=image,category,author,seo`
//   );

//   if (categoryName) {
//     baseUrl = `${baseUrl}&filters[category][name][$eq]=${categoryName}`;
//   }

//   if (localeCode) {
//     baseUrl = `${baseUrl}&locale=${localeCode}`;
//   }

//   const res = await fetch(baseUrl);
//   const articles = await res.json();

//   return { articles: articles.data, count: articles.meta.pagination.total };
// }
