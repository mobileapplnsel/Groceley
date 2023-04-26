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


  orderlistSuccess,
  orderlistFailure,


  
  
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
      'favourites',
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
      'addfavourites',
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
      'addfavourites',
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
      'cartlisting',
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
      'deletecart',
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
      'addcart',
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
    yield takeLatest('Profile/orderlistRequest',  orderlistSaga);
  })(),
 
];

export default watchFunction;