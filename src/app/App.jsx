import * as React from 'react';
import Navigation from './components/navigation/Navigation.jsx';
import About from './components/about/About.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Main from './components/main/Main.jsx';

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
      <Route path={`${match.url}/`}>
        {Component(<Main/>)}
      </Route>
      <Route path={`${match.url}about`}>
        {Component(<About/>)}
      </Route>
      <Route path={`${match.url}contacts`}>
        {Component(<Contacts/>)}
      </Route>
    </Switch>
  </div>
);

// MB - stands for Moonlight Blog
const Component = (component) => {
  return (
    <div className='mb-app-container'>
      <div style={{'margin-top': '56px'}}>{component}</div>
    </div>
  );
};

export default App;

