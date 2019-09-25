import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from '../redux/reducers';

const store = createStore(mainReducer);

export default (ComponentView) => ()=> {
   return (
     <Provider store={store}>
       <ComponentView />
     </Provider>
   )
}
