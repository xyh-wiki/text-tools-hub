/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:工具卡片组件
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ToolMeta } from '../../config/tools-meta';

// 中文说明：展示单个工具的基础信息与进入按钮
export const ToolCard: React.FC<{ tool: ToolMeta }> = ({ tool }) => {
  return (
    <article className="tool-card">
      <h3 className="tool-card-title">{tool.name}</h3>
      <p className="tool-card-desc">{tool.description}</p>
      <Link to={`/tools/${tool.category}/${tool.slug}`} className="btn-primary btn-sm">
        Open tool
      </Link>
    </article>
  );
};
