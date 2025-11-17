/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:应用根组件，配置路由和统一布局
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './routes/Home/HomePage';
import { ToolsPage } from './routes/Tools/ToolsPage';
import { ToolDetailPage } from './routes/ToolDetail/ToolDetailPage';
import { AboutPage } from './routes/About/AboutPage';
import { FAQPage } from './routes/FAQ/FAQPage';
import { ContactPage } from './routes/Contact/ContactPage';
import { PrivacyPage } from './routes/Privacy/PrivacyPage';
import { TermsPage } from './routes/Terms/TermsPage';
import { SitemapPage } from './routes/Sitemap/SitemapPage';
import { NotFoundPage } from './routes/NotFound/NotFoundPage';

// 中文说明：根组件负责组合布局与所有路由声明
const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/:category" element={<ToolsPage />} />
        <Route path="/tools/:category/:slug" element={<ToolDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
