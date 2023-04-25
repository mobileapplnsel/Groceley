import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  personaldetailsResponse: {},


  homeResponse: {},
  productResponse: {},
  productdetailsResponse: {},
  favouritesResponse: {},
  addfavouritesResponse: {},
  deletefavouritesResponse: {},


  punchoutResponse: {},
  calendarResponse: {},
  attendanceResponse:{},
  noticeResponse:{},

  leaveListResponse:{},
  leaveBalanceResponse:{},
  experiencedetailsResponse: {},
  qualificationResponse: {},
  professionaldetailsResponse: {},
  employeedetailsResponse: {},
  employeepromotionResponse: {},
  leaverequestsubmitResponse: {},
  payslipResponse:{},
};

const ProfileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
  
   
    //Personal details
    personaldetailsRequest(state, action) {
      state.status = action.type;
    },
    personaldetailsSuccess(state, action) {
      state.personaldetailsResponse = action.payload;
      state.status = action.type;
    },
    personaldetailsFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Dashboard
    homeRequest(state, action) {
      state.status = action.type;
    },
    homeSuccess(state, action) {
      state.homeResponse = action.payload;
      state.status = action.type;
    },
    homeFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Product 

    productRequest(state, action) {
      state.status = action.type;
    },
    productSuccess(state, action) {
      state.productResponse = action.payload;
      state.status = action.type;
    },
    productFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Product details

    productdetailsRequest(state, action) {
      state.status = action.type;
    },
    productdetailsSuccess(state, action) {
      state.productdetailsResponse = action.payload;
      state.status = action.type;
    },
    productdetailsFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


     //Favourites

     favouritesRequest(state, action) {
      state.status = action.type;
    },
     favouritesSuccess(state, action) {
      state.favouritesResponse = action.payload;
      state.status = action.type;
    },
    favouritesFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


         // Add Favourites

         addfavouritesRequest(state, action) {
          state.status = action.type;
        },
         addfavouritesSuccess(state, action) {
          state.addfavouritesResponse = action.payload;
          state.status = action.type;
        },
        addfavouritesFailure(state, action) {
          state.error = action.payload;
          state.status = action.type;
        },


          // Delete Favourites

          deletefavouritesRequest(state, action) {
            state.status = action.type;
          },
          deletefavouritesSuccess(state, action) {
            state.deletefavouritesResponse = action.payload;
            state.status = action.type;
          },
          deletefavouritesFailure(state, action) {
            state.error = action.payload;
            state.status = action.type;
          },

    

    //Punch out
    punchoutRequest(state, action) {
      state.status = action.type;
    },
    punchoutSuccess(state, action) {
      state.punchoutResponse = action.payload;
      state.status = action.type;
    },
    punchoutFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


        //Calendar
        calendarRequest(state, action) {
          state.status = action.type;
        },
        calendarSuccess(state, action) {
          state.calendarResponse = action.payload;
          state.status = action.type;
        },
        calendarFailure(state, action) {
          state.error = action.payload;
          state.status = action.type;
        },


        //Experience details
    experiencedetailsRequest(state, action) {
      state.status = action.type;
    },
    experiencedetailsSuccess(state, action) {
      state.experiencedetailsResponse = action.payload;
      state.status = action.type;
    },
    experiencedetailsFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Qualification details

    qualificationRequest(state, action) {
      state.status = action.type;
    },
    qualificationSuccess(state, action) {
      state.qualificationResponse = action.payload;
      state.status = action.type;
    },
    qualificationFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Professional details

    professionaldetailsRequest(state, action) {
      state.status = action.type;
    },
    professionaldetailsSuccess(state, action) {
      state.professionaldetailsResponse = action.payload;
      state.status = action.type;
    },
    professionaldetailsFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },



    //Employee details

    employeedetailsRequest(state, action) {
      state.status = action.type;
    },
    employeedetailsSuccess(state, action) {
      state.employeedetailsResponse = action.payload;
      state.status = action.type;
    },
    employeedetailsFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Employee promotion

    employeepromotionRequest(state, action) {
      state.status = action.type;
    },
    employeepromotionSuccess(state, action) {
      state.employeepromotionResponse = action.payload;
      state.status = action.type;
    },
    employeepromotionFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Attendance listing

    attendanceRequest(state, action) {
      state.status = action.type;
    },
    attendanceSuccess(state, action) {
      state.attendanceResponse = action.payload;
      state.status = action.type;
    },
    attendanceFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Notice

    noticeRequest(state, action) {
      state.status = action.type;
    },
    noticeSuccess(state, action) {
      state.noticeResponse = action.payload;
      state.status = action.type;
    },
    noticeFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Leave list

    leaveListRequest(state, action) {
      state.status = action.type;
    },
    leaveListSuccess(state, action) {
      state.leaveListResponse = action.payload;
      state.status = action.type;
    },
    leaveListFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Leave Balance

    leaveBalanceRequest(state, action) {
      state.status = action.type;
    },
    leaveBalanceSuccess(state, action) {
      state.leaveBalanceResponse = action.payload;
      state.status = action.type;
    },
    leaveBalanceFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Leave Request Submit

    leaverequestsubmitRequest(state, action) {
      state.status = action.type;
    },
    leaverequestsubmitSuccess(state, action) {
      state.leaverequestsubmitResponse = action.payload;
      state.status = action.type;
    },
    leaverequestsubmitFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Payslip
    
    payslipRequest(state, action) {
      state.status = action.type;
    },
    payslipSuccess(state, action) {
      state.payslipResponse = action.payload;
      state.status = action.type;
    },
    payslipFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

   
  },
});




export const {
  
  
  personaldetailsRequest,
  personaldetailsSuccess,
  personaldetailsFailure,
  
  homeRequest,
  homeSuccess,
  homeFailure,

  productRequest,
  productSuccess,
  productFailure,


  productdetailsRequest,
  productdetailsSuccess,
  productdetailsFailure,

  favouritesRequest,
  favouritesSuccess,
  favouritesFailure,

  addfavouritesRequest,
  addfavouritesSuccess,
  addfavouritesFailure,

  deletefavouritesRequest,
  deletefavouritesSuccess,
  deletefavouritesFailure,


  punchoutRequest,
  punchoutSuccess,
  punchoutFailure,

  calendarRequest,
  calendarSuccess,
  calendarFailure,

  experiencedetailsRequest,
  experiencedetailsSuccess,
  experiencedetailsFailure,

  qualificationRequest,
  qualificationSuccess,
  qualificationFailure,

  professionaldetailsRequest,
  professionaldetailsSuccess,
  professionaldetailsFailure,

  employeedetailsRequest,
  employeedetailsSuccess,
  employeedetailsFailure,

  employeepromotionRequest,
  employeepromotionSuccess,
  employeepromotionsFailure,

  attendanceRequest,
  attendanceSuccess,
  attendanceFailure,

  noticeRequest,
  noticeSuccess,
  noticeFailure,

  leaveListRequest,
  leaveListSuccess,
  leaveListFailure,

  leaveBalanceRequest,
  leaveBalanceSuccess,
  leaveBalanceFailure,

  leaverequestsubmitRequest,
  leaverequestsubmitSuccess,
  leaverequestsubmitFailure,

  payslipRequest,
  payslipSuccess,
  payslipFailure,
    

} = ProfileSlice.actions;

export default ProfileSlice.reducer;