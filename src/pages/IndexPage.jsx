import React from 'react';
import { Tabs, Pane, PaneContent } from 'components';

const IndexPage = () => (
  <div className="index-page">
    <Tabs>
      <Pane label="Tab 1">
        <PaneContent label="content 1">
          <div>something</div>
        </PaneContent>
        <PaneContent label="content 2">
          <div>something-more</div>
        </PaneContent>
      </Pane>
      <Pane label="Tab 2">
        <PaneContent label="content 1">
          <div>something 2</div>
        </PaneContent>
        <PaneContent label="content 2">
          <div>something-more 2</div>
        </PaneContent>
      </Pane>
      <Pane label="Tab 3">
        <PaneContent label="content 1">
          <div>something 3</div>
        </PaneContent>
        <PaneContent label="content 2">
          <div>something-more 3</div>
        </PaneContent>
      </Pane>
    </Tabs>
  </div>
);

export default IndexPage;
