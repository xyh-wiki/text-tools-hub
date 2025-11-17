/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:站点底部组件
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { toolCategories } from '../../config/tools-meta';

// 中文说明：展示版权、常用页面、分类链接与社交占位
export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <div className="footer-logo">Text Tools Hub</div>
          <p className="footer-desc">
            Client-side text and code utilities for developers, writers and power users.
          </p>
        </div>
        <div className="footer-section">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            {toolCategories.map(cat => (
              <li key={cat.id}>
                <Link to={`/tools/${cat.id}`}>{cat.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Text Tools Hub. All rights reserved.</span>
        <span>
          Follow us: <a href="#" aria-label="X profile">X</a> ·{' '}
          <a href="#" aria-label="GitHub profile">GitHub</a>
        </span>
      </div>
    </footer>
  );
};
