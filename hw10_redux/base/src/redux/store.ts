import {
  combineReducers,
  legacy_createStore
} from "redux";

import registerBookReducer from './registerBookReducer';

function configureStore() {
  return legacy_createStore(
    combineReducers({
      registerBook: registerBookReducer,
    })
  );
}

export default configureStore;