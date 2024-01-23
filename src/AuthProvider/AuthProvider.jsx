import React, { Children, createContext, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
   
    const axiosPublic=useAxiosPublic()
    const [user,setUser]= useState(null)
    const [loading,setLoading]=useState(true)


const handleLogin=async(userInfo)=>{
    const checkCredential= await axiosPublic.post('/validateUser',userInfo)
    
     setUser(checkCredential.data)
     setLoading(false)
    return checkCredential
}

 const handleLogOut=()=>{
    setLoading(true)
    localStorage.removeItem('token');
    setUser(null)
    
 }



 const userInfo={
    handleLogin,
    handleLogOut,
    user

 }

    return (
   <AuthContext.Provider value={userInfo}>
      {children}
   </AuthContext.Provider>
    );
};

export default AuthProvider;