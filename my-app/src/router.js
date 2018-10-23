import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './page/login';
import Admin from './admin';
import Buttons from './page/ui/index';
import NoMatch from './page/nomatch';
import Loading from './page/ui/loading';
import Modals from './page/ui/modals';
import Notice from './page/ui/notice';
import Message from './page/ui/message';
import Tab from './page/ui/tabs';
import Gallery from './page/ui/garrery';
import Carousels from './page/ui/carousel';
import FormLogin from './page/form/login';
import FormRegister from './page/form/register';
import BasicTable from './page/table/basicTable';
export default class ERouter extends React.Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                <Route path="/admin/ui/modals" component={Modals}></Route>
                <Route path="/admin/ui/loading" component={Loading}></Route>
                <Route path="/admin/ui/notification" component={Notice}></Route>
                <Route path="/admin/ui/messages" component={Message}></Route>
                <Route path="/admin/ui/tabs" component={Tab}></Route>
                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                <Route path="/admin/ui/carousel" component={Carousels}></Route>
                <Route path="/admin/form/login" component={FormLogin}></Route>
                <Route path="/admin/form/reg" component={FormRegister}></Route>
                <Route path="/admin/table/basic" component={BasicTable}></Route>
                <Route component={NoMatch}></Route>
              </Switch>
            </Admin>
          } />
        </App>
      </HashRouter>
    )
  }
}