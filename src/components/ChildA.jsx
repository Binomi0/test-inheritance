import React from 'react';
import Child from './Child';

const ChildA = (props) => {
  const href = 'childA';
  console.timeEnd(1);
  return (
      <Child {...props} href={href} />
  );
}

export default ChildA;
