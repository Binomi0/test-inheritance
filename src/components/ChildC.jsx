import Child from './Child';

class ChildC extends Child {
  render() {
    console.log('ChildC props', this.props)
    console.timeEnd(2);
    return super.render();
  }
}

export default ChildC;
