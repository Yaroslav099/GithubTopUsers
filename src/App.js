import React from 'react';
import UserList from './components/UserList';
import {useTopUsers} from './hooks';
import {connectToReduxStore} from './containers';
import Loader from './components/Loader';
import Err from './components/Err';

function App() {
  const {topUsers, err} = useTopUsers();

  return (
    <div className="App">
       {err && <Err text={err}/>}
       {!topUsers[0] && <Loader />}
       {topUsers[0] && <UserList data={topUsers} marginTop={25}/>}
    </div>
  );
}

export default connectToReduxStore(App);
