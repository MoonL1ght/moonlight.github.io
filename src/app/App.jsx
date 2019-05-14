import * as React from 'react';
import Navigation from './components/navigation/Navigation.jsx';
import About from './components/about/About.jsx';
// import Learn from './components/learn/Learn.jsx';

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './app.css';

class App extends React.Component {

  constructor() {
    super();
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    this.forceUpdate();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' component={MainAppWindow}/>
            {/* <Redirect exact from='/' to='/monitoring'/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const MainAppWindow = ({match}) => (
  <div>
    <Navigation url={match.url}/>
    <Switch>
      <Route path={`${match.url}about`}>
        {Component(<About/>)}
      </Route>
      {/* <Route path={`${match.url}learn`}>
        {Component(<Learn/>)}
        <div>Learn</div>
      </Route> */}
    </Switch>
  </div>
);

// MB - stands for Moonlight Blog
const Component = (component) => {
  return (
    <div className='MB-main-container' style={{height: window.innerHeight - 56 + 'px'}}>
      {component}
    </div>
  );
};

export default App;

