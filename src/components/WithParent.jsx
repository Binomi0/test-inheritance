import React from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';
import withParent from './customHOC';

const Parent = (props) => {
  return (
    <header className="App-header">
      <ChildA href='http://childB.org' {...props} />
      <ChildB {...props} />
      <ChildC href='childC' />
    </header>
  );
}

export default withParent(Parent);
