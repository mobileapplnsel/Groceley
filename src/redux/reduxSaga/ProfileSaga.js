import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import constants from '../../utils/helpers/constants';

import ProfileReducer, {

  homeSuccess,
  homeFailure,

  personaldetailsSuccess,
  personaldetailsFailure,

  punchinSuccess,
  punchinFailure,

  punchoutSuccess,
  punchoutFailure,

  calendarSuccess,
  calendarFailure,

  experiencedetailsSuccess,
  experiencedetailsFailure,
 
  qualificationSuccess,
  qualificationFailure,

  professionaldetailsSuccess,
  professionaldetailsFailure,


  employeepromotionSuccess,
  employeepromotionFailure,

  employeedetailsSuccess,
  employeedetailsFailure,

  attendanceSuccess,
  attendanceFailure,

  noticeSuccess,
  noticeFailure,

  leaveListSuccess,
  leaveListFailure,

  leaveBalanceSuccess,
  leaveBalanceFailure,

  leaverequestsubmitSuccess,
  leaverequestsubmitFailure,

  payslipSuccess,
  payslipFailure,
  
} from '../reducer/ProfileReducer';
import { getApi, postApi } from '../../utils/helpers/ApiRequest';
import { ToastAndroid } from 'react-native';
import Toast from '../../utils/helpers/Toast';

let getItem = state => state.ProfileReducer;



export function* personaldetailsSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    //authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'my-personal-details',
      action.payload,
      header,
    );
    console.log('Data==', response);
    console.log('Token==========',constants.Token);
    if (response.status == 200) {
      yield put(personaldetailsSuccess(response.data.response));
      
    } else {
      yield put(personaldetailsFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(personaldetailsFailure(error));
  }
}



// export function* attendanceSaga(action) {
//   const header = {
//     Accept: 'application/json',
//     contenttype: 'application/json',
//     authorization: constants.Token
//   };
//   try {
//     let response = yield call(
//       postApi,
//       'employee-attendance',
//       action.payload,
//       header,
//     );
//     console.log('Data==', response);
   
//     if (response.status == 200) {
//       yield put(attendanceSuccess(response.data.response));
     
      
//     } else {
//       yield put(attendanceFailure(response.data.response));
      
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(attendanceFailure(error));
//   }
// }

export function* attendanceSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'employee-attendance',
      action.payload,
      header,
    );
    console.log('Data==', response);
    console.log('Token==========',constants.Token);
    if (response.status == 200) {
      yield put(attendanceSuccess(response.data.response));
      
    } else {
      yield put(attendanceFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(attendanceFailure(error));
  }
}


export function* homeSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'home',
      action.payload,
      header,
    );
   console.log('Data==', response);
   // console.log('Token==========',constants.Token);
    if (response.status == 200) {
      yield put(homeSuccess(response.data));
      
    } else {
      yield put(homeFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(homeFailure(error));
  }
}

export function* punchinSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'punch-in',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(punchinSuccess(response.data.response));
      yield call(
        AsyncStorage.setItem,
        constants.PUNCHIN,
        JSON.stringify({token: response}),
        
      );
      
    } else {
      yield put(punchinFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(punchinFailure(error));
  }
}


export function* punchoutSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'punch-out',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(punchoutSuccess(response.data.response));
      yield call(
        AsyncStorage.setItem,
        constants.PUNCHOUT,
        JSON.stringify({token: response}),
        
      );
      
    } else {
      yield put(punchoutFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(punchoutFailure(error));
  }
}

export function* calendarSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'holiday-list',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(calendarSuccess(response.data.response));
      // yield call(
      //   AsyncStorage.setItem,
      //   constants.PUNCHOUT,
      //   JSON.stringify({token: response}),
        
      // );
      
    } else {
      yield put(calendarFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(calendarFailure(error));
  }
}

export function* experiencedetailsSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    //authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'employee-experience',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(experiencedetailsSuccess(response.data.response));
      // yield call(
      //   AsyncStorage.setItem,
      //   constants.PUNCHOUT,
      //   JSON.stringify({token: response}),
        
      // );
      
    } else {
      yield put(experiencedetailsFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(experiencedetailsFailure(error));
  }
}

export function* qualificationSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'employee-qualification',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(qualificationSuccess(response.data.response));
      // yield call(
      //   AsyncStorage.setItem,
      //   constants.PUNCHOUT,
      //   JSON.stringify({token: response}),
        
      // );
      
    } else {
      yield put(qualificationFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(qualificationFailure(error));
  }
}

export function* professionaldetailsSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'employee-professional',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(professionaldetailsSuccess(response.data.response));
      // yield call(
      //   AsyncStorage.setItem,
      //   constants.PUNCHOUT,
      //   JSON.stringify({token: response}),
        
      // );
      
    } else {
      yield put(professionaldetailsFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(professionaldetailsFailure(error));
  }
}

export function* employeepromotionSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'employee-promotion',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(employeepromotionSuccess(response.data.response));
      // yield call(
      //   AsyncStorage.setItem,
      //   constants.PUNCHOUT,
      //   JSON.stringify({token: response}),
        
      // );
      
    } else {
      yield put(employeepromotionFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(employeepromotionFailure(error));
  }
}

export function* employeedetailsSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'employee-details',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(employeedetailsSuccess(response.data.response));
      
      
    } else {
      yield put(employeedetailsFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(employeedetailsFailure(error));
  }
}


export function* noticeSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'notice-list',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(noticeSuccess(response.data.response));
      // yield call(
      //   AsyncStorage.setItem,
      //   constants.PUNCHOUT,
      //   JSON.stringify({token: response}),
        
      // );
      
    } else {
      yield put(noticeFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(noticeFailure(error));
  }
}


export function* leaveListSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'employee-leave-list',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(leaveListSuccess(response.data.response));
     
      
    } else {
      yield put(leaveListFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(leaveListFailure(error));
  }
}

export function* leaveBalanceSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'leave-balance',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(leaveBalanceSuccess(response.data.response));
      
      
    } else {
      yield put(leaveBalanceFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(leaveBalanceFailure(error));
  }
}


export function* leaverequestsubmitSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'leave-request-submit',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(leaverequestsubmitSuccess(response.data.response));
      
      
    } else {
      yield put(leaverequestsubmitFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(leaverequestsubmitFailure(error));
  }
}


export function* payslipSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'payslip',
      action.payload,
      header,
    );
    console.log('Data==', response);
   
    if (response.status == 200) {
      yield put(payslipSuccess(response.data.response));
    
      
    } else {
      yield put(payslipFailure(response.data.response));
      
    }
  } catch (error) {
    console.log(error);
    yield put(payslipFailure(error));
  }
}


const watchFunction = [




  (function* () {
    yield takeLatest('Profile/personaldetailsRequest', personaldetailsSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/homeRequest', homeSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/punchinRequest', punchinSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/punchoutRequest', punchoutSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/calendarRequest', calendarSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/experiencedetailsRequest', experiencedetailsSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/qualificationRequest', qualificationSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/professionaldetailsRequest', professionaldetailsSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/employeepromotionRequest', employeepromotionSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/employeedetailsRequest', employeedetailsSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/attendanceRequest', attendanceSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/noticeRequest', noticeSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/attendanceRequest', attendanceSaga);
  })(),
  
  (function* () {
    yield takeLatest('Profile/leaveListRequest', leaveListSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/leaveBalanceRequest', leaveBalanceSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/leaverequestsubmitRequest', leaverequestsubmitSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/payslipRequest', payslipSaga);
  })(),
];

export default watchFunction;