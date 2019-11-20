import React from 'react';
import logo from '../logo.svg';

class Child extends React.Component {
  state = {
    forAllChilds: 'I show in all childs',
    href: this.props.href
  }

  render() {
    console.log('Child props', this.props)
    console.log('Child state', this.state)
    return (
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href={this.props.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            I'm linking to => {this.state.href}
          </a>
          <p>{this.props.generic}</p>
          <p>{this.state.forAllChilds}</p>
        </>
    );
  }
}

export default Child;
