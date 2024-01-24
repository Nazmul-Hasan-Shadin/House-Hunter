import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetHouse = () => {
    const axiosPublic= useAxiosPublic()
    const {data:houseData}=useQuery({
        queryKey:['house-data'],
        queryFn: async ()=>{
            const houseInfo= axiosPublic.get('http://localhost:3000/api/v1/get-houses')
        }
    })
};

export default useGetHouse;