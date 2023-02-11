import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import AdminReducer from './reducer/AdminReducer';
import RootSaga from './reduxSaga/RootSaga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

export default configureStore({
  reducer: {
    AdminReducer: AdminReducer,
  },
  middleware,
});

sagaMiddleware.run(RootSaga);