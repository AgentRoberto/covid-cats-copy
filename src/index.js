import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Adopt from './components/Adopt'
import Rescue from './components/Rescue'
import Info from './components/Info'

import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
		      <Route exact path="/" component={App}/>
				  <Route exact path="/Adopt" component={Adopt}/>
          <Route exact path="/Rescue" component={Rescue}/>
				  <Route exact path="/Info" component={Info}/>
    </BrowserRouter>,
    document.getElementById('root')
);
