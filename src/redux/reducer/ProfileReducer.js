import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  personaldetailsResponse: {},
  dashboardResponse: {},
  punchinResponse: {},
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
    dashboardRequest(state, action) {
      state.status = action.type;
    },
    dashboardSuccess(state, action) {
      state.dashboardResponse = action.payload;
      state.status = action.type;
    },
    dashboardFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

    //Punch in
    punchinRequest(state, action) {
      state.status = action.type;
    },
    punchinSuccess(state, action) {
      state.punchinResponse = action.payload;
      state.status = action.type;
    },
    punchinFailure(state, action) {
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
  
  dashboardRequest,
  dashboardSuccess,
  dashboardFailure,

  punchinRequest,
  punchinSuccess,
  punchinFailure,


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