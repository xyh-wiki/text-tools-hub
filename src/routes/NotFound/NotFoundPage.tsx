/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:404 页面组件
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="page section">
      <Helmet>
        <title>Not found | Text Tools Hub</title>
        <meta name="description" content="The page you requested could not be found." />
      </Helmet>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <p>
        Go back to the <Link to="/">home page</Link> or browse the <Link to="/tools">tool list</Link>.
      </p>
    </section>
  );
};
