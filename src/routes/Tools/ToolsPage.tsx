/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:工具列表页面组件
 */
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import { toolsMeta, toolCategories, ToolCategory } from '../../config/tools-meta';
import { getDefaultTitle, getDefaultDescription } from '../../seo/seoConfig';
import { ToolCard } from '../../components/common/ToolCard';

// 中文说明：根据分类和搜索关键词过滤工具列表
export const ToolsPage: React.FC = () => {
  const { category } = useParams<{ category?: ToolCategory }>();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = (params.get('search') ?? '').toLowerCase();

  const filtered = useMemo(
    () =>
      toolsMeta.filter(tool => {
        if (category && tool.category !== category) return false;
        if (!search) return true;
        return (
          tool.name.toLowerCase().includes(search) ||
          tool.description.toLowerCase().includes(search)
        );
      }),
    [category, search]
  );

  const currentCategory = toolCategories.find(c => c.id === category);

  return (
    <>
      <Helmet>
        <title>
          {currentCategory ? `${currentCategory.label} | Text Tools Hub` : getDefaultTitle()}
        </title>
        <meta name="description" content={getDefaultDescription()} />
      </Helmet>
      <section className="section">
        <div className="section-header">
          <h1>{currentCategory ? currentCategory.label : 'All tools'}</h1>
          <p>
            Browse and search utilities for formatting, cleaning, converting and analyzing your
            text and code.
          </p>
        </div>
        <div className="tools-grid">
          {filtered.map(tool => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
          {filtered.length === 0 && <p>No tools match your search.</p>}
        </div>
      </section>
    </>
  );
};
