import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const [role,setRole]=useState('')
    const axiosPublic= useAxiosPublic()

    const handleSubmitForm=async(e)=>{
        e.preventDefault()
        const form= new FormData(e.currentTarget)
        const name= form.get('name')
        const password= form.get('password')
        const email= form.get('email')
        const userInfo={
            name,
            email,
            password,
            role
        }
      const postUserInfo=  await  axiosPublic.post('/registerUser',userInfo)
      console.log(postUserInfo);
      
 
        
   }
  return (
    <div className="  ">
      <form onSubmit={handleSubmitForm} className="card-body  text-black space-y-6 p-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="user name"
            className="input input-bordered"
            required
          />
        </div>

        <select onChange={(e)=>setRole(e.target.value)} className="select select-bordered text-black w-full max-w-xs">
          <option disabled selected>
            Role
          </option>
          <option>House Owner</option>
          <option>House Renter</option>
        </select>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            name="number"
            type="number"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control w-3/12 mt-6">
          <button className="btn bg-[#FF385C] text-white">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
