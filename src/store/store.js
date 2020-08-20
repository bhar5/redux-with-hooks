import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index';
import reduxThunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;