import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import Page1 from './components/Page1'
const Page2 = lazy(() => import('./components/Page2'))
const Page3 = lazy(() => import('./components/Page3'))

const renderLoader = () => <p>Loading</p>

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route })
  }
  render() {

    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      //parameter for AsyncComponent is the imported component
      // AsyncComponent(() => import('./components/Page2'))
      return (
        <Suspense fallback={renderLoader()}>
          <Page2 onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    } else if (this.state.route === 'page3') {
      // const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
      return (
        <Suspense fallback={renderLoader()}>
          <Page3 onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    }


  }
}

export default App;
