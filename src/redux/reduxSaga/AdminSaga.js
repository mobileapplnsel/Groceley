import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import constants from '../../utils/helpers/constants';
import {
  userpendingSuccess, userpendingFailure, userapprovedeclineSuccess, userapprovedeclineFailure, useraddSuccess, useraddFailure, userdeleteSuccess, userdeleteFailure,
  useradminupdateSuccess,
  useradminupdateFailure,
  userpendingnumberSuccess,
  userpendingnumberFailure,
} from '../reducer/AdminReducer';
import { getApi, postApi, deleteApi, putApi } from '../../utils/helpers/ApiRequest';
import Toast from '../../utils/helpers/Toast'


let getItem = state => state.AuthReducer;

export function* userpendingSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(postApi, 'user/list', action.payload, header);
    console.log('Data==', response);
    if (response.status == 200) {
      yield put(userpendingSuccess(response.data));
    } else {
      yield put(userpendingFailure(response.data));
    }
  } catch (error) {


    if (error.response.status == 401) {
      console.log('dkjfndsfn ds')
      let token_expire = tokenExpire()
      console.log('token_expire', token_expire)

      yield put(getTokenSuccess(token_expire))

      yield put(userpendingFailure(error))

    } else {
      yield put(userpendingFailure(error));

    }

  }
}

export function* userapprovedeclineSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(
      postApi,
      'user/approve-decline/' + action.payload?.id + '/',
      action.payload.obj,
      header,

    );
    console.log('Data==', response);
    if (response.status == 200) {
      yield put(userapprovedeclineSuccess(response.data));
    } else {
      yield put(userapprovedeclineFailure(response.data));
    }
  } catch (error) {
    console.log(error);
    yield put(userapprovedeclineFailure(error));
  }
}

export function* useraddSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(postApi, 'user/add', action.payload, header);
    console.log('Data==', response);
    if (response.status == 200) {
      yield put(useraddSuccess(response.data));
    } else {
      yield put(useraddFailure(response.data));
    }
  } catch (error) {
    console.log(error);
    yield put(useraddFailure(error));
  }
}

export function* userdeleteSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {

    let response = yield call(deleteApi, `user/hard-delete/${action.payload?.id}`, header);

    console.log('Data==', response);
    if (response.status == 200) {
      yield put(userdeleteSuccess(response.data));
    } else {
      yield put(userdeleteFailure(response.data));
    }
  } catch (error) {
    console.log(error);
    yield put(userdeleteFailure(error));
  }
}

export function* useradminupdateSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {

    let response = yield call(
      putApi,
      '/user/update/' + action.payload?.id + '/',
      action.payload?.obj,
      header,
    );

    console.log('Data==', response);
    if (response.status == 200) {
      yield put(useradminupdateSuccess(response.data));
    } else {
      yield put(useradminupdateFailure(response.data));
    }
  } catch (error) {
    console.log(error);
    yield put(useradminupdateFailure(error));
  }
}

export function* userpendingnumberSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {

    let response = yield call(
      getApi, 'user/pending/all', header
    );

    console.log('Data==', response);
    if (response.status == 200) {
      yield put(userpendingnumberSuccess(response.data));
    } else {
      yield put(userpendingnumberFailure(response.data));
    }
  } catch (error) {
    console.log(error);
    yield put(userpendingnumberFailure(error));
  }
}

function tokenExpire() {

  AsyncStorage.removeItem(constants.YAMATRACKCREDS)
  AsyncStorage.removeItem(constants.ID)
  AsyncStorage.removeItem(constants.EMAIL)
  AsyncStorage.removeItem(constants.ROLE)

  let res = {
    token: null,
    role: '',
    id: '',
    email: null
  }
  Toast('Your session is expired')
  return res

}


const watchFunction = [
  (function* () {
    yield takeLatest('Admin/userpendingRequest', userpendingSaga);
  })(),
  (function* () {
    yield takeLatest('Admin/userapprovedeclineRequest', userapprovedeclineSaga);
  })(),
  (function* () {
    yield takeLatest('Admin/useraddRequest', useraddSaga);
  })(),
  (function* () {
    yield takeLatest('Admin/userdeleteRequest', userdeleteSaga);
  })(),
  (function* () {
    yield takeLatest('Admin/useradminupdateRequest', useradminupdateSaga);
  })(),
  (function* () {
    yield takeLatest('Admin/userpendingnumberRequest', userpendingnumberSaga);
  })(),
];

export default watchFunction;

