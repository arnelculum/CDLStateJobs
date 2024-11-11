export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string;
}

// Import all .md files from the articles directory
const articles = import.meta.glob('../articles/*.md', { eager: true }) as Record<string, any>;

// Convert imported markdown files to Article objects
export const getAllArticles = (): Article[] => {
  return Object.entries(articles).map(([path, article]) => ({
    slug: path.replace('../articles/', '').replace('.md', ''),
    title: article.frontmatter.title,
    excerpt: article.frontmatter.excerpt,
    date: article.frontmatter.date,
    author: article.frontmatter.author,
    readTime: article.frontmatter.readTime,
    tags: article.frontmatter.tags,
    image: article.frontmatter.image,
    content: article.content
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLatestArticles = (count: number): Article[] => {
  return getAllArticles().slice(0, count);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return getAllArticles().find(article => article.slug === slug);
};
