/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:FAQ 页面组件
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getDefaultTitle } from '../../seo/seoConfig';

export const FAQPage: React.FC = () => {
  return (
    <section className="page section">
      <Helmet>
        <title>FAQ | Text Tools Hub</title>
        <meta
          name="description"
          content="Frequently asked questions about Text Tools Hub, privacy, browser support and typical text tool use cases."
        />
      </Helmet>
      <h1>Frequently asked questions</h1>
      <div className="section">
        <div className="faq-item">
          <h3>Is my text sent to your servers?</h3>
          <p>
            No. All tools are implemented as client-side utilities. Your input is processed
            directly in your browser, and nothing is uploaded to our servers.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can I use these tools for sensitive data?</h3>
          <p>
            From a technical perspective, nothing is transmitted over the network. However, you
            should always follow your organization&apos;s security policies when handling
            confidential information.
          </p>
        </div>
        <div className="faq-item">
          <h3>How large can my input be?</h3>
          <p>
            Most tools can comfortably handle tens of thousands of lines in modern browsers. Very
            large inputs might become slow because processing happens entirely in JavaScript.
          </p>
        </div>
        <div className="faq-item">
          <h3>Are these tools free?</h3>
          <p>
            Yes. All tools on Text Tools Hub are free to use and there are no pricing plans or
            subscriptions.
          </p>
        </div>
        <div className="faq-item">
          <h3>How can I discover more tools?</h3>
          <p>
            Use the search box in the header, browse by category, or open the sitemap page to see a
            complete list of available tools.
          </p>
        </div>
      </div>
    </section>
  );
};
