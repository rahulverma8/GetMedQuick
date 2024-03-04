const getStorage=(key)=>{
    try{
        const data= localStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        return false
    }
   
}

const setStorage=(key,val)=>{
    try{
       localStorage.setItem(key,JSON.stringify(val));
    } catch (error) {
        return false
    }
}
const getSessionStorage=(key)=>{
    try{
        const data=  sessionStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        return false
    }
   
}

const setSessionStorage=(key,val)=>{
    try{
      sessionStorage.setItem(key,JSON.stringify(val));
    } catch (error) {
        return false
    }
}

export {getStorage ,setStorage,getSessionStorage ,setSessionStorage};