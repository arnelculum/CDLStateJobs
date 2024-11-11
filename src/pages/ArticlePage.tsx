import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug } from '../data/articles';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | CDL Jobs by State</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <link rel="canonical" href={`https://cdljobsbystate.com/${article.slug}`} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        <div className="flex items-center text-gray-600 mb-8">
          <div className="flex items-center mr-6">
            <User className="h-5 w-5 mr-2" />
            {article.author}
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            {article.readTime}
          </div>
        </div>

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}

        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
