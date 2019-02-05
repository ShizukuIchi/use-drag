# `use-drag`

React hook makes a component draggable.

## Usage

```jsx
import { useRef } from 'react';
import useDrag from 'use-drag';

const Demo = () => {
  const ref = useRef(null);
  useDrag(ref);
  return <div ref={ref}>Now I'm draggable!</div>;
};
```

## Reference

```jsx
useDrag(ref);
```

- `ref` &mdash; a react reference object. `ref.current` will be used.
