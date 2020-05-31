import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Navbar from './Component/Navbar'
import UsersList from './Component/UsersList';
import AddAUsers from './Component/AddAUsers';
import EditUsers from './Component/EditUsers';
import ViewUsers from './Component/ViewUsers';

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Navbar/>
        <Switch>
          <Route exact path="/" component={UsersList}/>
          <Route exact path="/users/add" component={AddAUsers}/>
          <Route exact path="/users/edit/:id" component={EditUsers}/>
          <Route exact path="/users/view/:id" component={ViewUsers}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
