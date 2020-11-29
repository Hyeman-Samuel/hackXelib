import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import Library from './components/Library/Library.jsx';
import NotFound from './components/NotFound/NotFound';
import User from './components/User/User';
export const routing = (
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/library' component={Library} />
      <Route path='/user' component={User} />
      {/* <Route exact path='*' component={NotFound} /> */}
      
    </BrowserRouter>
  </React.StrictMode>
  )
