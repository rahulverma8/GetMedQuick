import { configureStore } from '@reduxjs/toolkit';
import { setStorage ,getStorage} from '../HelperMethods/browserStorageFuns';
import {HospitalAuthReducer} from './Actions';


 const store=configureStore({
    reducer:{
      hospitalAuth:HospitalAuthReducer,
    },
    preloadedState: getStorage("previousStoreData")||{}
});
    
    store.subscribe(()=>setStorage("previousStoreData",store.getState()))

export default store