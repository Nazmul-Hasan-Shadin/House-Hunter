import React, { useContext } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Properties = () => {
   
  const {user,loading}=useContext(AuthContext)
  const axiosPublic=useAxiosPublic()
   const {data={} ,isLoading}=useQuery({
    queryKey: ['rolechecker'],
    enabled :!loading,
    queryFn: async()=>{
      try {
         const isOwner= await axiosPublic.get(`/get-houses/${user?.email}`)
         return isOwner
      } catch (error) {
         console.log(error);
      }
  }

})




    return (
        <div>
             <table className="table  my-4 ">
          <thead className="bg-[#FAFBFE] ">
            <tr className="">
              <th>
                <label>#</label>
              </th>

              <th className="text-black">Product image </th>
              <th className="text-black">Name</th>
             
              <th className="text-black">Badroom Quantity</th>

              <th className="text-black">selling price</th>
              <th className="text-black">Buy price</th>
              <th className="text-black">Location</th>
              <th className="text-black">update here</th>
              <th className="text-black">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-[#FFFFFF]">

          {
     data?.data?.message?.map((house,index)=>  <tr className="" key={house._id}  >
      <th>
        <label>{index + 1}</label>
      </th>
     
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle  h-16">
              <img src={house?.image} />
            </div>
          </div>
        </div>
      </td>
      <td className="text-black">{house?.name}</td>
     
      <td> {house?.bedroom} </td>

      <td>
        <span className="badge badge-ghost badge-sm">
          $ {house?.sellingPrice}
        </span>
      </td>

      <td>
        <span className="badge badge-ghost badge-sm">
          $ {house?.buyPrice}
        </span>
      </td>

      <td>
        <span className="badge badge-ghost badge-sm">
          {house?.location}
        </span>
      </td>

      <td>
        {" "}
        <Link to={`/dashboard/update/${house._id}`}>
          <td>
            {" "}
            <button className="btn">
              {" "}
              <FaEdit className="text-xl"></FaEdit>{" "}
            </button>{" "}
          </td>
        </Link>{" "}
      </td>

      <td>
        {" "}
        <button
          // onClick={() => handleDelete(product._id)}
          className="btn"
        >
          {" "}
          <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>{" "}
        </button>{" "}
      </td>
    </tr>)
    }       

  



      </tbody>

  </table>
            
        </div>
    );
};

export default Properties;