/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:应用布局组件（Header + Main + Footer）
 */
import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../navigation/Footer';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 中文说明：统一页面骨架结构
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
};
