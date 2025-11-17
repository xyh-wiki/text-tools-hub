/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:首页页面组件
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toolsMeta, toolCategories } from '../../config/tools-meta';
import { getDefaultTitle, getDefaultDescription } from '../../seo/seoConfig';
import { ToolCard } from '../../components/common/ToolCard';
import { Link } from 'react-router-dom';

// 中文说明：首页展示 Hero、分类入口与热门工具
export const HomePage: React.FC = () => {
  const popular = toolsMeta.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>{getDefaultTitle()}</title>
        <meta name="description" content={getDefaultDescription()} />
      </Helmet>
      <section className="hero">
        <div className="hero-content">
          <h1>Fast, secure text & code utilities in your browser.</h1>
          <p>
            Format, clean, convert and analyze your text without sending any data to a server.
            All tools run entirely inside your browser.
          </p>
          <div className="hero-actions">
            <a href="#popular-tools" className="btn-primary">Browse popular tools</a>
            <a href="#why-client-side" className="btn-secondary">Why client-side?</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="categories-heading">
        <div className="section-header">
          <h2 id="categories-heading">Tool categories</h2>
          <p>Explore tools by category and find the right utility for your task.</p>
        </div>
        <div className="category-grid">
          {toolCategories.map(cat => (
              <Link key={cat.id} className="category-card" to={`/tools/${cat.id}`}>
                <h3>{cat.label}</h3>
                <p>View utilities in the {cat.label.toLowerCase()} category.</p>
              </Link>
          ))}
        </div>
      </section>

      <section className="section" id="popular-tools" aria-labelledby="popular-heading">
        <div className="section-header">
          <h2 id="popular-heading">Popular tools</h2>
          <p>Frequently used utilities for everyday text and code clean-up.</p>
        </div>
        <div className="tools-grid">
          {popular.map(tool => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="section" id="why-client-side">
        <div className="section-header">
          <h2>Why client-side processing?</h2>
        </div>
        <div className="info-grid">
          <article>
            <h3>Privacy by design</h3>
            <p>Your text never leaves your browser. There is no server-side processing.</p>
          </article>
          <article>
            <h3>Low latency</h3>
            <p>Instant feedback without network delays, even on slow connections.</p>
          </article>
          <article>
            <h3>Developer friendly</h3>
            <p>Use the tools while offline once the page is loaded, ideal for quick checks.</p>
          </article>
        </div>
      </section>
    </>
  );
};
