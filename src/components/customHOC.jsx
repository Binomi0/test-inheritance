import React from 'react';

export default function CustomHOC(Component) {
  return class CustomHOC extends React.Component {
    state = {
      generic: 'Soy Genérico',
    }

    render() {
      return (
        <Component {...this.state} />
      )
    }
  }
}
