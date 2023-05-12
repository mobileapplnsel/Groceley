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
 


  cartlistingResponse: {},
  deletecartResponse: {},
  addcartResponse: {},
  createcartResponse:{},
  updatecartResponse:{},
  removecartResponse: {},

  orderlistResponse: {},
  addDeliveryResponse: {},
  selectDeliveryResponse: {},
  editDeliveryResponse: {},
  addDeliveryInstructionsResponse: {},
  

  transactionhistoryResponse :{},
  leaderboardResponse :{},
  addmembershipResponse :{},
  membershipdetailsResponse :{},
  renewmembershipResponse :{},

  walletResponse: {},

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


          //Cart listing

          cartlistingRequest(state, action) {
            state.status = action.type;
          },
          cartlistingSuccess(state, action) {
            state.cartlistingResponse = action.payload;
            state.status = action.type;
          },
          cartlistingFailure(state, action) {
            state.error = action.payload;
            state.status = action.type;
          },


          //Delete cart

          deletecartRequest(state, action) {
            state.status = action.type;
          },
          deletecartSuccess(state, action) {
            state.deletecartResponse = action.payload;
            state.status = action.type;
          },
          deletecartFailure(state, action) {
            state.error = action.payload;
            state.status = action.type;
          },


          //Add cart

          addcartRequest(state, action) {
            state.status = action.type;
          },
          addcartSuccess(state, action) {
            state.addcartResponse = action.payload;
            state.status = action.type;
          },
          addcartFailure(state, action) {
            state.error = action.payload;
            state.status = action.type;
          },


          //Create cart

          createcartRequest(state, action) {
            state.status = action.type;
          },
          createcartSuccess(state, action) {
            state.createcartResponse = action.payload;
            state.status = action.type;
          },
          createcartFailure(state, action) {
            state.error = action.payload;
            state.status = action.type;
          },



          //Update cart

          updatecartRequest(state, action) {
            state.status = action.type;
          },
          updatecartSuccess(state, action) {
            state.updatecartResponse = action.payload;
            state.status = action.type;
          },
          updatecartFailure(state, action) {
            state.error = action.payload;
            state.status = action.type;
          },



          //Remove cart

          removecartRequest(state, action) {
            state.status = action.type;
          },
          removecartSuccess(state, action) {
            state.removecartResponse = action.payload;
            state.status = action.type;
          },
          removecartFailure(state, action) {
            state.error = action.payload;
            state.status = action.type;
          },



    //Order list

   
    orderlistRequest(state, action) {
      state.status = action.type;
    },
    orderlistSuccess(state, action) {
      state.orderlistResponse = action.payload;
      state.status = action.type;
    },
    orderlistFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },

        

//Add Delivery Address

   
addDeliveryRequest(state, action) {
  state.status = action.type;
},
addDeliverySuccess(state, action) {
  state.addDeliveryResponse = action.payload;
  state.status = action.type;
},
addDeliveryFailure(state, action) {
  state.error = action.payload;
  state.status = action.type;
},
       


//Select Delivery Address

   
selectDeliveryRequest(state, action) {
  state.status = action.type;
},
selectDeliverySuccess(state, action) {
  state.selectDeliveryResponse = action.payload;
  state.status = action.type;
},
selectDeliveryFailure(state, action) {
  state.error = action.payload;
  state.status = action.type;
},


//Edit Delivery Address

   
editDeliveryRequest(state, action) {
  state.status = action.type;
},
editDeliverySuccess(state, action) {
  state.editDeliveryResponse = action.payload;
  state.status = action.type;
},
editDeliveryFailure(state, action) {
  state.error = action.payload;
  state.status = action.type;
},

    
//Add Delivery Instruction

   
addDeliveryInstructionsRequest(state, action) {
  state.status = action.type;
},
addDeliveryInstructionsSuccess(state, action) {
  state.addDeliveryInstructionsResponse = action.payload;
  state.status = action.type;
},
addDeliveryInstructionsFailure(state, action) {
  state.error = action.payload;
  state.status = action.type;
},



  //Transaction history

   
transactionhistoryRequest(state, action) {
  state.status = action.type;
},
transactionhistorySuccess(state, action) {
  state.transactionhistoryResponse = action.payload;
  state.status = action.type;
},
transactionhistoryFailure(state, action) {
  state.error = action.payload;
  state.status = action.type;
},




  //Leaderboard

   
  leaderboardRequest(state, action) {
    state.status = action.type;
  },
  leaderboardSuccess(state, action) {
    state.leaderboardResponse = action.payload;
    state.status = action.type;
  },
  leaderboardFailure(state, action) {
    state.error = action.payload;
    state.status = action.type;
  },



  //Add Membership 

   
  addmembershipRequest(state, action) {
    state.status = action.type;
  },
  addmembershipSuccess(state, action) {
    state.addmembershipResponse = action.payload;
    state.status = action.type;
  },
  addmembershipFailure(state, action) {
    state.error = action.payload;
    state.status = action.type;
  },


    //Membership details

   
    membershipdetailsRequest(state, action) {
      state.status = action.type;
    },
    membershipdetailsSuccess(state, action) {
      state.membershipdetailsResponse = action.payload;
      state.status = action.type;
    },
    membershipdetailsFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


    //Renew Membership

   
    renewmembershipRequest(state, action) {
      state.status = action.type;
    },
    renewmembershipSuccess(state, action) {
      state.renewmembershipResponse = action.payload;
      state.status = action.type;
    },
    renewmembershipFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },


  //Wallet 

   
  walletRequest(state, action) {
    state.status = action.type;
  },
  walletSuccess(state, action) {
    state.walletResponse = action.payload;
    state.status = action.type;
  },
  walletFailure(state, action) {
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

  cartlistingRequest,
  cartlistingSuccess,
  cartlistingFailure,


  deletecartRequest,
  deletecartSuccess,
  deletecartFailure,

  addcartRequest,
  addcartSuccess,
  addcartFailure,

  
  updatecartRequest,
  updatecartSuccess,
  updatecartFailure,

  removecartRequest,
  removecartSuccess,
  removecartFailure,

  walletRequest,
  walletSuccess,
  walletFailure,


  orderlistRequest,
  orderlistSuccess,
  orderlistFailure,

  addDeliveryRequest,
  addDeliverySuccess,
  addDeliveryFailure,
  

  selectDeliveryRequest,
  selectDeliverySuccess,
  selectDeliveryFailure,

  editDeliveryRequest,
  editDeliverySuccess,
  editDeliveryFailure,

  addDeliveryInstructionsRequest,
  addDeliveryInstructionsSuccess,
  addDeliveryInstructionsFailure,

  transactionhistoryRequest,
  transactionhistorySuccess,
  transactionhistoryFailure,

  leaderboardRequest,
  leaderboardSuccess,
  leaderboardFailure,

  addmembershipRequest,
  addmembershipSuccess,
  addmembershipFailure,

  membershipdetailsRequest,
  membershipdetailsSuccess,
  membershipdetailsFailure,


  renewmembershipRequest,
  renewmembershipSuccess,
  renewmembershipFailure,

  createcartRequest,
  createcartSuccess,
  createcartFailure,


} = ProfileSlice.actions;

export default ProfileSlice.reducer;