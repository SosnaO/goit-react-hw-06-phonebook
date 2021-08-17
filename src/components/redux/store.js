// import {createStore} from 'redux';

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './counter/counter-reducer'
//  import counterReducer from './counter/counter-reducer';

// const rootReducer =(contacts:{items: [],filter: ''}, action)=>{
// return contacts;

// }  

// const store=createStore(reducer);

// export default store;


const rootReducer = combineReducers({
        // contacts: {
        //   items: [],
        //   filter: ''
        // }
      contacts:contactsReducer,

});

const store=createStore(rootReducer, composeWithDevTools());

export default store;