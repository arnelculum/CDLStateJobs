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

export const articles: Article[] = [
  {
    slug: 'how-much-do-truck-drivers-make',
    title: 'CDL Driver Salary Guide: How Much Do Truck Drivers Make in 2024?',
    excerpt: 'Comprehensive breakdown of truck driver salaries across different roles, regions, and experience levels.',
    date: '2024-03-15',
    author: 'John Smith',
    readTime: '6 min read',
    tags: ['salary', 'career', 'industry-trends'],
    image: '/api/placeholder/800/500',
    content: `
# CDL Driver Salary Guide: How Much Do Truck Drivers Make in 2024?

Professional truck drivers are the backbone of America's economy, and their compensation reflects the vital nature of their work. In this comprehensive guide, we'll break down what CDL drivers can expect to earn in 2024.

[... rest of your article content ...]
    `
  }
  // You can add more articles here
];

export const getAllArticles = (): Article[] => {
  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getLatestArticles = (count: number): Article[] => {
  return getAllArticles().slice(0, count);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};
