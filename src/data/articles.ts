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

// This will get content from our text files
const articleFiles = import.meta.glob('../articles/*.txt', { eager: true });

export const getAllArticles = (): Article[] => {
  return Object.entries(articleFiles).map(([path, content]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.txt', '') || '';
    const fileContent = content.default;
    const [metadata, ...contentLines] = fileContent.split('\n\n');

    // Parse the simple metadata from first lines
    const metaLines = metadata.split('\n');
    const title = metaLines[0]?.replace('Title: ', '') || '';
    const excerpt = metaLines[1]?.replace('Excerpt: ', '') || '';
    const date = metaLines[2]?.replace('Date: ', '') || '';
    const author = metaLines[3]?.replace('Author: ', '') || '';
    const readTime = metaLines[4]?.replace('ReadTime: ', '') || '';
    const tags = metaLines[5]?.replace('Tags: ', '').split(',').map((t: string) => t.trim()) || [];
    const image = metaLines[6]?.replace('Image: ', '') || '';

    return {
      slug,
      title,
      excerpt,
      date,
      author,
      readTime,
      tags,
      image,
      content: contentLines.join('\n\n')
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLatestArticles = (count: number): Article[] => {
  return getAllArticles().slice(0, count);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return getAllArticles().find(article => article.slug === slug);
};
