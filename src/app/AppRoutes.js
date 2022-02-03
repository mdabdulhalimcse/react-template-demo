import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';
import Backups from './backups/Backups';
import ConsoleBySsh from './console-by-ssh/ConsoleBySsh';
import Firewalls from './firewalls/Firewalls';
import Health from './health/Health';
import VirtualMachine from './virtual-machine/VirtualMachine';


const Dashboard = lazy(() => import('./dashboard/Dashboard'));



// const Buttons = lazy(() => import('./basic-ui/Buttons'));
// const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
// const Typography = lazy(() => import('./basic-ui/Typography'));


// const BasicElements = lazy(() => import('./form-elements/BasicElements'));

// const BasicTable = lazy(() => import('./tables/BasicTable'));



// const Mdi = lazy(() => import('./icons/Mdi'));


// const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const BlankPage = lazy(() => import('./general-pages/BlankPage'));
const TestPage = lazy(() => import('./general-pages/TestPage'));
const ModalTest = lazy(() => import('./general-pages/ModalTest'));






class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route exact path="/virtul-machine" component={ VirtualMachine } />
          <Route exact path="/console-by-ssh" component={ ConsoleBySsh } />
          <Route exact path="/firewalls" component={ Firewalls } />
          <Route exact path="/backups" component={ Backups } />
          <Route exact path="/health" component={ Health } />


          {/* <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } /> */}


          {/* <Route path="/form-Elements/basic-elements" component={ BasicElements } /> */}

          {/* <Route path="/tables/basic-table" component={ BasicTable } /> */}


          {/* <Route path="/icons/mdi" component={ Mdi } /> */}


          {/* <Route path="/charts/chart-js" component={ ChartJs } /> */}


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />
          <Route path="/general-pages/test-page" component={ TestPage } />
          <Route path="/general-pages/modal-test" component={ ModalTest } />
  


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;