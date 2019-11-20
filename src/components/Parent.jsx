import React from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';

const Parent = (props) => {
  return (
    <header className="App-header">
      <ChildA {...props} href='childA' />
      <ChildB {...props} />
      <ChildC href='childC' />
    </header>
  );
}

export default Parent;
