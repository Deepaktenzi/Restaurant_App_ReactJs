import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
  'h1',
  { id: 'title', style: { color: 'red' } },
  'Heading One'
);

const heading2 = React.createElement(
  'h2',
  { id: 'title', style: { color: 'red' } },
  'Heading Two'
);

const container = React.createElement('div', { id: 'container' }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
