/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:Sitemap 页面组件
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toolsMeta, toolCategories } from '../../config/tools-meta';
import { Link } from 'react-router-dom';

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tools">All tools</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
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
                                <Link to={`/tools/${tool.category}/${tool.slug}`}>{tool.name}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        ))}
    </section>
  );
};
