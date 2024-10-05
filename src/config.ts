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

  // Other configurations
  [key: string]: any;
}

type HexoPost = {
  title: string;
  slug: string;
  date: Date;
  updated?: Date;
  comments?: boolean;
  layout?: string;
  content: string;
  excerpt?: string;
  categories?: string[];
  tags?: string[];
  permalink: string;
};

type HexoPage = {
  title: string;
  layout: string;
  path: string;
  content: string;
};

type HexoSite = {
  posts: {data:HexoPost[]};
  pages: {data:HexoPage[]};
};


export const config:HexoConfig = window.__hexoConfig ?? {};
export const site:HexoSite = window.__hexoSite ?? {};