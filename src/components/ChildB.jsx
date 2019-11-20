import Child from './Child';

class ChildB extends Child {
  state = {
    href: 'childB',
    generic: 'No soy genérico, necesito mi propio estado'

  }
  render() {
    console.log('ChildB props', this.props)
    console.timeEnd(2);
    return super.render(this.state);
  }
}

export default ChildB;
