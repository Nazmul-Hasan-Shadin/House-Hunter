import { useQuery } from '@tanstack/react-query';

import House from '../../../Components/HouseCard/House';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const FeatureProperty = () => {
    const axiosPublic= useAxiosPublic()
    const {data:houseData}=useQuery({
        queryKey:['house-data'],
        queryFn: async ()=>{
            const houseInfo=await axiosPublic.get('/get-houses')
            return houseInfo
        }
    })
    console.log(houseData)
    return (
        <div>
        <div className='text-start'>
            <h2 className='font-medium'>Featured</h2>
            <h1 className='text-3xl font-bold text-[#274ABB]'>Properties</h1>
           
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 object-contain'>
          {
            houseData?.data?.message?.slice(0,4).map((house)=><House house={house} key={house._id}></House>)
          }
        </div>
        </div>
    );
};

export default FeatureProperty;