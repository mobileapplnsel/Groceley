import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  
  loginResponse: {},
  forgotpasswordResponse: {},
  
  changepasswordResponse: {},
  resetpasswordResponse: {},
  logoutResponse: {},
  token: null,
  
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    //getToken
    getTokenRequest(state, action) {
      state.isLoading = true;
      state.status = action.type;
    },
    getTokenSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.role=action.payload.role
      state.status = action.type;
      state.id=action.payload.id
      state.email=action.payload.email
    },
    getTokenFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = action.type;
    },

    /* SET TOKEN */
    setTokenRequest(state, action) {
      state.status = action.type;
    },
    setTokenSuccess(state, action) {
      state.token = action.payload;
      state.status = action.type;
    },
    setTokenFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Login
    loginRequest(state, action) {
      state.status = action.type;
    },
    loginSuccess(state, action) {
      state.loginResponse = action.payload;
      state.status = action.type;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Forgot password
    forgotpasswordRequest(state, action) {
      state.status = action.type;
    },
    forgotpasswordSuccess(state, action) {
      state.forgotpasswordResponse = action.payload;
      state.status = action.type;
    },
    forgotpasswordFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Reset password
    resetpasswordRequest(state, action) {
      state.status = action.type;
    },
    resetpasswordSuccess(state, action) {
      state.resetpasswordResponse = action.payload;
      state.status = action.type;
    },
    resetpasswordFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

   
    //Change password
    changepasswordRequest(state, action) {
      state.status = action.type;
    },
    changepasswordSuccess(state, action) {
      state.changepasswordResponse = action.payload;
      state.status = action.type;
    },
    changepasswordFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Logout
    logoutRequest(state, action) {
      state.status = action.type;
    },
   logoutSuccess(state, action) {
      state.logoutResponse = action.payload;
      state.status = action.type;
    },
    logoutFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },
  },
});

export const {
  getTokenRequest,
  getTokenSuccess,
  getTokenFailure,

  setTokenRequest,
  setTokenSuccess,
  setTokenFailure,
 
  loginRequest,
  loginSuccess,
  loginFailure,

  forgotpasswordRequest,
  forgotpasswordSuccess,
  forgotpasswordFailure,
  
  changepasswordRequest,
  changepasswordSuccess,
  changepasswordFailure,

  resetpasswordRequest,
  resetpasswordSuccess,
  resetpasswordFailure,

  logoutRequest,
  logoutSuccess,
  logoutFailure,

} = AuthSlice.actions;

export default AuthSlice.reducer;