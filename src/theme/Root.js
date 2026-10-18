import React from 'react';
import ChatWidget from '@site/src/components/ChatWidget';

// Root wraps the whole site, so the chat widget is available on every page
// and keeps its conversation while the reader moves between pages.
export default function Root({children}) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}
