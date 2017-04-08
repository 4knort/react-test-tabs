import React from 'react';
import { Tabs, Pane } from 'components';

const IndexPage = () => (
  <div className="index-page">
    <Tabs>
      <Pane label="Tab 1">
        <div>This is my indexPage tab 1 contents!</div>
      </Pane>
      <Pane label="Tab 2">
        <div>This is my indexPage tab 2 contents!</div>
      </Pane>
      <Pane label="Tab 3">
        <div>This is my indexPage tab 3 contents!</div>
      </Pane>
    </Tabs>
  </div>
);

export default IndexPage;
