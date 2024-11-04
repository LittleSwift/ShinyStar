export interface HexoConfig {
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  language?: string;
  timezone?: string;

  url: string;
  root: string;
  permalink: string;
  permalink_defaults?: Record<string, any>;

  source_dir?: string;
  public_dir?: string;
  tag_dir?: string;
  archive_dir?: string;
  category_dir?: string;

  theme: string;
  theme_config?: Record<string, any>;

  // Writing settings
  new_post_name?: string;
  default_layout?: string;
  auto_spacing?: boolean;
  titlecase?: boolean;
  external_link?: { enable: boolean; exclude?: string[] };

  // Deployment settings
  deploy?: Array<{
    type: string;
    repo: string;
    branch?: string;
  }>;

  // Pagination
  per_page?: number;
  pagination_dir?: string;

  // Server settings
  server?: {
    port?: number;
    log?: boolean;
  };

  date_format: string;
  time_format: string;
}

export type HexoPost = {
  asset_dir:string,
  categories:{data:string[],length:number},
  comments:boolean,
  content:string,
  date:string,
  excerpt:string,
  full_source:string,
  layout:string,
  more:string,
  path:string,
  permalink:string,
  photos:string[],
  published:boolean,
  raw:string,
  slug:string,
  source:string
  tags:{data:string[],length:number},
  title:string,
  updated:string,
  __post:boolean,
  _content:string,
  _id:string,
};

export type HexoPage = {
  title: string;
  layout: string;
  path: string;
  content: string;
};

export type HexoSite = {
  posts: {data:HexoPost[]};
  pages: {data:HexoPage[]};
};

export type HexoTheme = {
  personalLinks: {
    [key: string]: string
  };
}

export const config:HexoConfig = window.__hexoConfig;
export const site:HexoSite = window.__hexoSite;
export const theme:HexoTheme = window.__hexoTheme;