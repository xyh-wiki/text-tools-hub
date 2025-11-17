/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:Terms of Service 页面组件
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const TermsPage: React.FC = () => {
  return (
    <section className="page section">
      <Helmet>
        <title>Terms of Service | Text Tools Hub</title>
        <meta
          name="description"
          content="Terms of Service for using Text Tools Hub. Read about your responsibilities and acceptable use."
        />
      </Helmet>
      <h1>Terms of Service</h1>
      <p>
        Text Tools Hub is provided as-is, without any warranty. You are responsible for how you use
        the tools and for verifying the correctness of the results in your specific context.
      </p>
      <p>
        You agree not to use the tools for illegal activities or to process data in violation of
        applicable laws or regulations.
      </p>
      <p>
        We may update these terms from time to time. Continued use of the website after changes are
        published constitutes acceptance of the updated terms.
      </p>
    </section>
  );
};
