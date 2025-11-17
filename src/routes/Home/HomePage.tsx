/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:首页页面组件（包含 Hero、工具分类入口、热门工具列表等）
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toolsMeta, toolCategories } from '../../config/tools-meta';
import { getDefaultTitle, getDefaultDescription } from '../../seo/seoConfig';
import { ToolCard } from '../../components/common/ToolCard';

/**
 * 使用说明：
 * 1. 首页包含四个主要区域：
 *    - Hero 区域：站点标题、简介、两个 CTA 按钮（滚动到热门工具 / 客户端优势说明）
 *    - 分类入口：按大类展示工具入口卡片
 *    - 热门工具：展示前若干个常用工具
 *    - “Why client-side” 说明：强调本项目纯前端、隐私安全
 *
 * 2. 特别说明（HashRouter 下的锚点问题处理）：
 *    - 由于整个站点使用 HashRouter（#/path 形式），不能再使用 <a href="#popular-tools"> 这种锚点跳转
 *    - 否则会和 HashRouter 的 hash 路由冲突，导致 404 或路由错误
 *    - 因此这里通过 onClick + scrollIntoView 的方式实现页面内平滑滚动，不再使用 <a href="#xxx">
 *
 * 3. 内部路由跳转统一使用 react-router-dom 的 <Link> 组件：
 *    - 避免 <a href="/tools/..."> 直接请求后端静态资源导致 404
 *    - Link 会交由前端路由处理，和 HashRouter 完全兼容
 */

export const HomePage: React.FC = () => {
  // 预设热门工具列表，这里简单取前 6 个工具
  const popular = toolsMeta.slice(0, 6);

  /**
   * 滚动到指定锚点元素
   * @param id DOM 元素 id，例如 "popular-tools"
   */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    // 使用原生 scrollIntoView 实现平滑滚动
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
      <>
        {/* 基础 SEO，首页标题和描述 */}
        <Helmet>
          <title>{getDefaultTitle()}</title>
          <meta name="description" content={getDefaultDescription()} />
        </Helmet>

        {/* Hero 区域：站点主标语 + 简介 + CTA 按钮 */}
        <section className="hero">
          <div className="hero-content">
            <h1>Fast, secure text &amp; code utilities in your browser.</h1>
            <p>
              Format, clean, convert and analyze your text without sending any data to a server.
              All tools run entirely inside your browser.
            </p>
            <div className="hero-actions">
              {/* 按钮 1：滚动到热门工具区域，不使用锚点 href，避免与 HashRouter 冲突 */}
              <button
                  type="button"
                  className="btn-primary"
                  onClick={() => scrollToSection('popular-tools')}
              >
                Browse popular tools
              </button>

              {/* 按钮 2：滚动到“Why client-side?” 区域 */}
              <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => scrollToSection('why-client-side')}
              >
                Why client-side?
              </button>
            </div>
          </div>
        </section>

        {/* 工具分类入口区域：展示所有工具类别 */}
        <section className="section" aria-labelledby="categories-heading">
          <div className="section-header">
            <h2 id="categories-heading">Tool categories</h2>
            <p>Explore tools by category and find the right utility for your task.</p>
          </div>
          <div className="category-grid">
            {toolCategories.map((cat) => (
                /**
                 * 使用 Link 组件进行内部跳转：
                 * - to="/tools/xxx" 会交由 HashRouter 管理，URL 形如 "#/tools/xxx"
                 * - 避免使用 <a href="/tools/xxx"> 导致浏览器直接请求后端路径，引发 404
                 */
                <Link key={cat.id} className="category-card" to={`/tools/${cat.id}`}>
                  <h3>{cat.label}</h3>
                  <p>View utilities in the {cat.label.toLowerCase()} category.</p>
                </Link>
            ))}
          </div>
        </section>

        {/* 热门工具区域：id="popular-tools"，供 scrollIntoView 精确滚动定位 */}
        <section className="section" id="popular-tools" aria-labelledby="popular-heading">
          <div className="section-header">
            <h2 id="popular-heading">Popular tools</h2>
            <p>Frequently used utilities for everyday text and code clean-up.</p>
          </div>
          <div className="tools-grid">
            {popular.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* Why client-side 区域：强调隐私与性能优势，id 用于滚动定位 */}
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
