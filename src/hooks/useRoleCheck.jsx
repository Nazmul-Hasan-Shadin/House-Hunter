import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useRoleCheck = () => {
  const {user,loading}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
     const {data={} ,isLoading}=useQuery({
      queryKey: ['rolechecker'],
      enabled :!loading,
      queryFn: async()=>{
        try {
           const isOwner= await axiosPublic.get(`/role-checker/${user?.email}`)
           return isOwner
        } catch (error) {
           console.log(error);
        }
    }
  })

  return [data]

     }

export default useRoleCheck;