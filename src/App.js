import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1'

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: ''
    }
  }

  onRouteChange = (route) => {
    if (route === 'page1') {
      this.setState({ route: route })
    } else if (route === 'page2') {
      //asynchronouse code, returns a promise
      import('./components/Page2').then((Page2) => {
        //.default is from Webpack
        this.setState({ route: route, component: Page2.default })
      })
    } else if (route === 'page3') {
      import('./components/Page3').then((Page3) => {
        this.setState({ route: route, component: Page3.default })
      })
    }
  }
  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />
    }
  }


  // if (route === 'page1') {
  //   return <Page1 onRouteChange={onRouteChange} />
  // } else if (route === 'page2') {
  //   return <Page2 onRouteChange={onRouteChange} />
  // } else if (route === 'page3') {
  //   return <Page3 onRouteChange={onRouteChange} />
  // }


}

export default App;
