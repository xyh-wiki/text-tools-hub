/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:站点导航栏组件
 */
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toolCategories } from '../../config/tools-meta';
import { ThemeToggle } from '../common/ThemeToggle';

// 中文说明：顶部导航，包含 Logo、导航菜单、搜索与主题切换
export const Navbar: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/tools?search=${encodeURIComponent(search)}`);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            Text Tools Hub
          </Link>
          <nav className="navbar-links" aria-label="Main navigation">
            <NavLink to="/" end>
              Home
            </NavLink>
            <div className="navbar-dropdown">
              <span className="navbar-dropdown-label">Tools</span>
              <div className="navbar-dropdown-menu">
                <NavLink to="/tools">All tools</NavLink>
                {toolCategories.map(cat => (
                  <NavLink key={cat.id} to={`/tools/${cat.id}`}>
                    {cat.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
        <div className="navbar-right">
          <form onSubmit={onSubmit} className="navbar-search" role="search">
            <input
              type="search"
              placeholder="Search tools..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search tools"
            />
          </form>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
