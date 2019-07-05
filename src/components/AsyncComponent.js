import React, { Component } from 'react';

//higher order component, component that returns a component

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const component = await importComponent();
      this.setState({
        component: component.default
      })
    }
    render() {
      const Component = this.state.component;
      //destructuring props if component has any props
      return Component ? <Component {...this.props} /> : null
    }
  }
  //because wrapped in function, must return the AsyncComponent
  return AsyncComponent
} 