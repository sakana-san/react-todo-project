import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import reactBasic from './react-basic';
import reactToggle from './react-toggle';
import reactCounter from './react-counter';
import reduxCounter from './redux-counter';


class App extends React.Component {
  render() {
    return (
      <div>
        <header className="l-header">
          <div className="l-header__inner">
            <h2 className="c-heading"><a href="#">React練習一覧</a></h2>
            <nav className="c-nav">
              <ul className="c-nav__list">
                <li className="c-nav__item"><Link to='react-basic'>react basic</Link></li>
                <li className="c-nav__item"><Link to='react-toggle'>react toggle</Link></li>
                <li className="c-nav__item"><Link to='react-counter'>react counter</Link></li>
                <li className="c-nav__item"><Link to='redux-counter'>redux counter</Link></li>
              </ul>
            </nav>
          </div>

        </header>
        <div className="p-panel">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class FirstView extends React.Component {
  render()  {
    return (
      <div>
        <p>React練習ページです</p>
        <nav className="c-nav--first-view">
          <ul className="c-nav__list">
            <li className="c-nav__item"><Link to='react-basic'>react basic</Link></li>
            <li className="c-nav__item"><Link to='react-toggle'>react toggle</Link></li>
            <li className="c-nav__item"><Link to='react-counter'>react counter</Link></li>
            <li className="c-nav__item"><Link to='redux-counter'>redux counter</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default class extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={FirstView} />
          <Route path = 'react-basic' component={reactBasic} />
          <Route path = 'react-toggle' component={reactToggle} />
          <Route path = 'react-counter' component={reactCounter} />
          <Route path = 'redux-counter' component={reduxCounter} />
        </Route>
      </Router>
    );
  }
}