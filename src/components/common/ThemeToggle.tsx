/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:主题切换按钮组件
 */
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

// 中文说明：通过点击切换 light / dark 主题
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      className="btn-ghost theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};
