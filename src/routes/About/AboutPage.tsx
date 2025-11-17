/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:About 页面组件
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getDefaultTitle, getDefaultDescription } from '../../seo/seoConfig';

export const AboutPage: React.FC = () => {
  return (
    <section className="page section">
      <Helmet>
        <title>About | Text Tools Hub</title>
        <meta name="description" content={getDefaultDescription()} />
      </Helmet>
      <h1>About Text Tools Hub</h1>
      <p>
        Text Tools Hub is a collection of small, focused utilities to help you work with text and
        code faster. Everything runs in your browser, so your content never leaves your device.
      </p>
      <p>
        The project is inspired by classic developer tool sites, but with a modern UI, clear
        information architecture and a strong focus on privacy and accessibility.
      </p>
    </section>
  );
};
