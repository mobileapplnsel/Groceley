import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import constants from '../../utils/helpers/constants';

import ProfileReducer, {

  homeSuccess,
  homeFailure,

  personaldetailsSuccess,
  personaldetailsFailure,

  productSuccess,
  productFailure,

  productdetailsSuccess,
  productdetailsFailure,

  favouritesSuccess,
  favouritesFailure,


  addfavouritesSuccess,
  addfavouritesFailure,

  deletefavouritesSuccess,
  deletefavouritesFailure,

  cartlistingSuccess,
  cartlistingFailure,


  deletecartSuccess,
  deletecartFailure,

  addcartSuccess,
  addcartFailure,


  createcartSuccess,
  createcartFailure,

  updatecartSuccess,
  updatecartFailure,

  removecartSuccess,
  removecartFailure,

  orderlistSuccess,
  orderlistFailure,


  addDeliverySuccess,
  addDeliveryFailure,

  selectDeliverySuccess,
  selectDeliveryFailure,


  editDeliverySuccess,
  editDeliveryFailure,

  addDeliveryInstructionsSuccess,
  addDeliveryInstructionsFailure,


  transactionhistorySuccess,
  transactionhistoryFailure,


  leaderboardSuccess,
  leaderboardFailure,


  addmembershipSuccess,
  addmembershipFailure,

  membershipdetailsSuccess,
  membershipdetailsFailure,

  renewmembershipSuccess,
  renewmembershipFailure,

  walletSuccess,
  walletFailure,
  
  
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

export function* productSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'products',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(productSuccess(response.data));
     
      
    } else {
      yield put(productFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(productFailure(error));
  }
}

export function* favouritesSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'favouritelist_userwise',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(favouritesSuccess(response.data));
     
      
    } else {
      yield put(favouritesFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(favouritesFailure(error));
  }
}


export function* addfavouritesSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'add_to_favourite',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(addfavouritesSuccess(response.data));
     
      
    } else {
      yield put(addfavouritesFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(addfavouritesFailure(error));
  }
}



export function* deletefavouritesSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'removefrom_favouritelist',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(deletefavouritesSuccess(response.data));
     
      
    } else {
      yield put(deletefavouritesFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(addfavouritesFailure(error));
  }
}




export function* productdetailsSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'productdetails',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(productdetailsSuccess(response.data));
     
      
    } else {
      yield put(productdetailsFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(productdetailsFailure(error));
  }
}


export function* cartlistingSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'cart',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(cartlistingSuccess(response.data));
     
      
    } else {
      yield put(cartlistingFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(cartlistingFailure(error));
  }
}




export function* deletecartSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'delete_cart_product',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(deletecartSuccess(response.data));
     
      
    } else {
      yield put(deletecartFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(deletecartFailure(error));
  }
}




export function* addcartSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'add_cart_products',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(addcartSuccess(response.data));
     
      
    } else {
      yield put(addcartFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(addcartFailure(error));
  }
}


export function* createcartSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'add_cart',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(createcartSuccess(response.data));
     
      
    } else {
      yield put(createcartFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(createcartFailure(error));
  }
}



export function* updatecartSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'update_cart',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(updatecartSuccess(response.data));
     
      
    } else {
      yield put(updatecartFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(updatecartFailure(error));
  }
}


export function* removecartSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'delete_product_frm_cart',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(removecartSuccess(response.data));
     
      
    } else {
      yield put(removecartFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(removecartFailure(error));
  }
}


export function* orderlistSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'orderlist',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(orderlistSuccess(response.data));
     
      
    } else {
      yield put(orderlistFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(orderlistFailure(error));
  }
}


export function* addDeliverySaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'adddelivery',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(addDeliverySuccess(response.data));
     
      
    } else {
      yield put(addDeliveryFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(addDeliveryFailure(error));
  }
}


export function* selectDeliverySaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'selectdelivery',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(selectDeliverySuccess(response.data));
     
      
    } else {
      yield put(selectDeliveryFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(selectDeliveryFailure(error));
  }
}

export function* editDeliverySaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'editdelivery',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(editDeliverySuccess(response.data));
     
      
    } else {
      yield put(editDeliveryFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(editDeliveryFailure(error));
  }
}

export function* addDeliveryInstructionsSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'addDeliveryInstructions',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(addDeliveryInstructionsSuccess(response.data));
     
      
    } else {
      yield put(addDeliveryInstructionsFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(addDeliveryInstructionsFailure(error));
  }
}

export function* transactionhistorySaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'transactionhistory',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(transactionhistorySuccess(response.data));
     
      
    } else {
      yield put(transactionhistoryFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(transactionhistoryFailure(error));
  }
}


export function* leaderboardSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'leaderboard',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(leaderboardSuccess(response.data));
     
      
    } else {
      yield put(leaderboardFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(leaderboardFailure(error));
  }
}

export function* addmembershipSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'add_membership',
      action.payload,
      header
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(addmembershipSuccess(response.data));
     
      
    } else {
      yield put(addmembershipFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(addmembershipFailure(error));
  }
}

export function* membershipdetailsSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'membership_details',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(membershipdetailsSuccess(response.data));
     
      
    } else {
      yield put(membershipdetailsFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(membershipdetailsFailure(error));
  }
}

export function* renewmembershipSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'membership_renewal',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(renewmembershipSuccess(response.data));
     
      
    } else {
      yield put(renewmembershipFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(renewmembershipFailure(error));
  }
}

export function* walletSaga(action) {
  const header = {
    Accept: 'application/json',
    contenttype: 'application/json',
   // authorization: constants.Token
  };
  try {
    let response = yield call(
      postApi,
      'wallet',
      action.payload,
      header,
    );
    console.log('Data==', response);
    
    if (response.status == 200) {
      yield put(walletSuccess(response.data));
     
      
    } else {
      yield put(walletFailure(response.data));
      
    }
  } catch (error) {
    console.log(error);
    yield put(walletFailure(error));
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
    yield takeLatest('Profile/productRequest', productSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/favouritesRequest', favouritesSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/addfavouritesRequest', addfavouritesSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/deletefavouritesRequest', deletefavouritesSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/productdetailsRequest', productdetailsSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/cartlistingRequest', cartlistingSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/deletecartRequest',  deletecartSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/addcartRequest',  addcartSaga);
  })(),


  (function* () {
    yield takeLatest('Profile/createcartRequest',  createcartSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/updatecartRequest',  updatecartSaga);
  })(),


  (function* () {
    yield takeLatest('Profile/removecartRequest',  removecartSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/orderlistRequest',  orderlistSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/addDeliveryRequest', addDeliverySaga);
  })(),

  (function* () {
    yield takeLatest('Profile/selectDeliveryRequest', selectDeliverySaga);
  })(),

  (function* () {
    yield takeLatest('Profile/editDeliveryRequest', editDeliverySaga);
  })(),


  (function* () {
    yield takeLatest('Profile/addDeliveryInstructionsRequest', addDeliveryInstructionsSaga);
  })(),


  (function* () {
    yield takeLatest('Profile/transactionhistoryRequest', transactionhistorySaga);
  })(),

  (function* () {
    yield takeLatest('Profile/leaderboardRequest', leaderboardSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/addmembershipRequest', addmembershipSaga);
  })(),


(function* () {
  yield takeLatest('Profile/membershipdetailsRequest', membershipdetailsSaga);
})(),


(function* () {
  yield takeLatest('Profile/renewmembershipRequest', renewmembershipSaga);
})(),


(function* () {
  yield takeLatest('Profile/wallet', walletSaga);
})(),
];

export default watchFunction;