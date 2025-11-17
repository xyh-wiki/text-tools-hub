/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:Sitemap 页面组件
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toolsMeta, toolCategories } from '../../config/tools-meta';

export const SitemapPage: React.FC = () => {
  return (
    <section className="page section">
      <Helmet>
        <title>Sitemap | Text Tools Hub</title>
        <meta
          name="description"
          content="Sitemap of Text Tools Hub. Quickly find any page or tool available on the site."
        />
      </Helmet>
      <h1>Sitemap</h1>
      <h2>Pages</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/tools">All tools</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Privacy</a></li>
        <li><a href="/terms">Terms</a></li>
        <li><a href="/sitemap">Sitemap</a></li>
      </ul>

      <h2>Tools by category</h2>
      {toolCategories.map(cat => (
        <div key={cat.id}>
          <h3>{cat.label}</h3>
          <ul>
            {toolsMeta
              .filter(t => t.category === cat.id)
              .map(tool => (
                <li key={tool.slug}>
                  <a href={`/tools/${tool.category}/${tool.slug}`}>{tool.name}</a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
