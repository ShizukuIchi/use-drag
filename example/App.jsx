import React from 'react';
import useDrag from '../src';

export default function App() {
  const ref = React.useRef(null);
  useDrag(ref);
  return (
    <div ref={ref}>
      <h2>
        DEMO of <span style={{ color: '#F44336' }}>use-drag</span>
      </h2>
    </div>
  );
}
