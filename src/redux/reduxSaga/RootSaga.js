import {all} from 'redux-saga/effects';
import AdminSaga from './AdminSaga';


const combinedSaga = [...AdminSaga];

export default function* RootSaga() {
  yield all(combinedSaga);
}
