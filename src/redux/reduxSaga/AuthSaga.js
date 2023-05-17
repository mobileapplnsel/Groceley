import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import constants from '../../utils/helpers/constants';

import AuthReducer, {
 
  loginFailure,
  loginSuccess,

  forgotpasswordFailure,
  forgotpasswordSuccess,

  resetpasswordFailure,
  resetpasswordSuccess,

  
  getTokenFailure,
  getTokenSuccess,


  setTokenSuccess,
  setTokenFailure,


  changepasswordSuccess,
  changepasswordFailure,


  logoutSuccess,
  logoutFailure,

} from '../reducer/AuthReducer';
import { getApi, postApi } from '../../utils/helpers/ApiRequest';
import { ToastAndroid } from 'react-native';
import Toast from '../../utils/helpers/Toast';

let getItem = state => state.AuthReducer;



// export function* get_tokenSaga() {
//   //   let item = yield select(getItem);
//   try {
//     const token = yield call(AsyncStorage.getItem, constants.YAMATRACKCREDS);
//     const role = yield call(AsyncStorage.getItem, constants.ROLE);
//     const id = yield call(AsyncStorage.getItem, constants.ID);
//     const email = yield call(AsyncStorage.getItem, constants.EMAIL);
//     console.log(email)

//     let res = {
//       token: token,
//       role: role,
//       id: id,
//       email: email
//     }
//     console.log(res)

//     if (token != null) {

//       yield put(getTokenSuccess(res));
//     } else {
//       yield put(getTokenSuccess(res));
//     }
//   } catch (error) {
//     console.log(error)
//     yield put(getTokenFailure(error));
//   }
// }

/* SET Token */
// export function* setTokenSaga(action) {
//   try {
//     yield call(AsyncStorage.setItem, constants.YAMATRACKCREDS, action.payload);
//     yield put(setTokenSuccess(action.payload));
//   } catch (error) {
//     yield put(setTokenFailure(error));
//   }
// }



export function* loginSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    console.log('abc');
    let response = yield call(postApi, 'login', action.payload, header);
    console.log('Data==', response);
    if (response.data.status_code == 200) {
        console.log('signin response====', response.data.response);
        constants.Token = response.data.response.jwt_token;
     
        console.log("Token ========= ", constants.Token)
         
        yield put(loginSuccess(response.data.response));
        
        yield call(
            AsyncStorage.setItem,
            constants.HRMSTOKEN,
            JSON.stringify({token: response.data.response}),
            
          );

          console.log("Async storage ===", AsyncStorage)
     
    } else {
      yield put(loginFailure(response.data.response));
     
    }
  } catch (error) {
    console.log(error);
    yield put(loginFailure(error));
   
  }
}

export function* forgot_password_Saga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(
      postApi,
      'forgot-password',
      action.payload,
      header,
    );
    if (response.status == 200) {
      yield put(forgotpasswordSuccess(response.data));
     
    } else {
      yield put(forgotpasswordFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(forgotpasswordFailure(error));
  }
}



export function* changepasswordSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'change-password',
      action.payload,
      header,
    );
    console.log('Data==', response);
    console.log('yjgjygggygtydr=======',constants.Token);
    if (response.data.status_code == 200) {
      yield put(changepasswordSuccess(response.data.response));
      
    } else {
      yield put(changepasswordFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(changepasswordFailure(error));
  }
}


export function* resetpasswordSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'reset-password',
      action.payload,
      header,
    );
    console.log('Data==', response);
    console.log('yjgjygggygtydr=======',constants.Token);
    if (response.data.status_code == 200) {
      yield put(resetpasswordSuccess(response.data.response));
      
    } else {
      yield put(resetpasswordFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(resetpasswordFailure(error));
  }
}

export function* logoutSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    console.log('abc');
    let response = yield call(postApi, 'logout', action.payload, header);
    console.log('Data==', response);
    console.log('jhwfgrhwaf',constants.Token);
    if (response.data.status_code == 200) {
       
        yield put(logoutSuccess(response.data.response));
        
        yield call(
            AsyncStorage.removeItem,
            constants.HRMSTOKEN,
            
            
          );

          
     
    } else {
      yield put(logoutFailure(response.data.response));
     
    }
  } catch (error) {
    console.log(error);
    yield put(logoutFailure(error));
   
  }
}

const watchFunction = [
//   (function* () {
//     yield takeLatest('Auth/getTokenRequest', get_tokenSaga);
//   })(),

 
  (function* () {
    yield takeLatest('Auth/loginRequest', loginSaga);
  })(),

  (function* () {
    yield takeLatest('Auth/forgotpasswordRequest', forgot_password_Saga);
  })(),
  // (function* () {
  //   yield takeLatest('Auth/setTokenRequest', setTokenSaga);
  // })(),
  (function* () {
    yield takeLatest('Auth/changepasswordRequest', changepasswordSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/logoutRequest', logoutSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/resetpasswordRequest', resetpasswordSaga);
  })(),
];

export default watchFunction;