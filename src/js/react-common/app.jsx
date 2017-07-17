import React from 'react';
import {BrowserRouter as BrowserRouter, browserHistory, Route, NavLink } from 'react-router-dom';
import { Switch } from 'react-router';
import reactBasic from './react-basic';
import reactToggle from './react-toggle';
import reactCounter from './react-counter';
import reduxCounter from './redux-counter';
import reactReduxCounter from './react-redux-counter';


class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="l-header">
          <div className="l-header__inner">
            <h2 className="c-heading"><NavLink to='/'>React練習一覧</NavLink></h2>
            <nav className="c-nav">
              <ul className="c-nav__list">
                <li className="c-nav__item"><NavLink to='react-basic'>react basic</NavLink></li>
                <li className="c-nav__item"><NavLink to='react-toggle'>react toggle</NavLink></li>
                <li className="c-nav__item"><NavLink to='react-counter'>react counter</NavLink></li>
                <li className="c-nav__item"><NavLink to='redux-counter'>redux counter</NavLink></li>
                <li className="c-nav__item"><NavLink to='react-redux-counter'>react redux counter</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>
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
            <li className="c-nav__item"><NavLink to='/react-basic'>react basic</NavLink></li>
            <li className="c-nav__item"><NavLink to='/react-toggle'>react toggle</NavLink></li>
            <li className="c-nav__item"><NavLink to='/react-counter'>react counter</NavLink></li>
            <li className="c-nav__item"><NavLink to='/redux-counter'>redux counter</NavLink></li>
            <li className="c-nav__item"><NavLink to='/react-redux-counter'>react redux counter</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default class extends React.Component {
  render () {
    return(
      <BrowserRouter history={browserHistory}>
        <div>
            <Header />
            <div className="p-panel">
              <Switch>
                <Route exact path = '/' component={FirstView} />
                <Route exact path = '/react-basic'  component={reactBasic} />
                <Route exact path = '/react-toggle' component={reactToggle} />
                <Route exact path = '/react-counter' component={reactCounter} />
                <Route exact path = '/redux-counter' component={reduxCounter} />
                <Route exact path = '/redux-counter' component={reactReduxCounter} />
              </Switch>
            </div>

        </div>
      </BrowserRouter>
    );
  }
}
