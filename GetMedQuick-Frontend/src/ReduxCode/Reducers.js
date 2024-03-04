import { createSlice ,current } from '@reduxjs/toolkit';
// import { getStorage } from '../HelperFun/browserStorageFuns';

export const HospitalAuthSlice=createSlice({
    name:'authContext',
    initialState:{
        value:false,
        isMailVerfied:false,
        isWalletConnected:false,
        hospitalData:{},
        locationData:{}
    },
    reducers:{
        changeHospitalAuth:(state,action) => {return {...current(state),value:action.payload}},
        setHospitalData:(state,action)=>{
            return { ...current(state),hospitalData:action.payload}
        },
        setHospitalLocation : (state,action) =>{
            return {...current(state),locationData : action.payload}
        }
    }
})


export const {changeHospitalAuth,setHospitalData , setHospitalLocation}=HospitalAuthSlice.actions;

