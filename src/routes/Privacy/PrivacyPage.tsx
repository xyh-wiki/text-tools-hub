/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:Privacy Policy 页面组件
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const PrivacyPage: React.FC = () => {
  return (
    <section className="page section">
      <Helmet>
        <title>Privacy Policy | Text Tools Hub</title>
        <meta
          name="description"
          content="Learn how Text Tools Hub handles your data. All tools run client-side and your text never leaves your browser."
        />
      </Helmet>
      <h1>Privacy Policy</h1>
      <p>
        Text Tools Hub is designed as a client-side utility collection. When you paste or type text
        into any of the tools, the processing happens entirely in your browser.
      </p>
      <p>
        We do not store, log or transmit the contents you process with the tools. Your text never
        leaves your device unless you choose to save or share it yourself.
      </p>
      <p>
        If we use any third-party analytics in the future, it will be limited to anonymous,
        aggregated usage metrics that cannot be used to reconstruct your input data.
      </p>
    </section>
  );
};
