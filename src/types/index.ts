export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

export interface PageDataAttributes {
  SEO?: {
    id: number;
    title: string;
    description: string;
  };
}

export interface PageDataType {
  id: number;
  attributes: PageDataAttributes;
}
