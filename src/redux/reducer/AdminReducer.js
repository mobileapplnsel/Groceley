import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userpendingResponse: {},
  userapprovedeclineResponse: {},
  useraddResponse: {},
  userdeleteResponse: {},
  useradminupdateResponse: {},
  userpendingnumberResponse: {},
  token: null,
};

const AdminSlice = createSlice({
  name: 'Admin',
  initialState,
  reducers: {

    //User pending
    userpendingRequest(state, action) {
      state.status = action.type;
    },
    userpendingSuccess(state, action) {
      state.userpendingResponse = action.payload;
      state.status = action.type;
    },
    userpendingFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //User decline/approve
    userapprovedeclineRequest(state, action) {
      state.status = action.type;
    },
    userapprovedeclineSuccess(state, action) {
      state.userapprovedeclineResponse = action.payload;
      state.status = action.type;
    },
    userapprovedeclineFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //User add 
    useraddRequest(state, action) {
      state.status = action.type;
    },
    useraddSuccess(state, action) {
      state.useraddResponse = action.payload;
      state.status = action.type;
    },
    useraddFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //User delete
    userdeleteRequest(state, action) {
      state.status = action.type;
    },
    userdeleteSuccess(state, action) {
      state.userdeleteResponse = action.payload;
      state.status = action.type;
    },
    userdeleteFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //User update
    useradminupdateRequest(state, action) {
      state.status = action.type;
    },
    useradminupdateSuccess(state, action) {
      state.useradminupdateResponse = action.payload;
      state.status = action.type;
    },
    useradminupdateFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //User pending number
    userpendingnumberRequest(state, action) {
      state.status = action.type;
    },
    userpendingnumberSuccess(state, action) {
      state.userpendingnumberResponse = action.payload;
      state.status = action.type;
    },
    userpendingnumberFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


  },
});

export const {
  userpendingRequest,
  userpendingSuccess,
  userpendingFailure,

  userapprovedeclineRequest,
  userapprovedeclineSuccess,
  userapprovedeclineFailure,

  useraddRequest,
  useraddSuccess,
  useraddFailure,

  userdeleteRequest,
  userdeleteSuccess,
  userdeleteFailure,

  useradminupdateRequest,
  useradminupdateSuccess,
  useradminupdateFailure,

  userpendingnumberRequest,
  userpendingnumberSuccess,
  userpendingnumberFailure,


} = AdminSlice.actions;

export default AdminSlice.reducer;

