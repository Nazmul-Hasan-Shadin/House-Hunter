
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
  const {handleLogin}= useContext(AuthContext)
    const navigate=useNavigate()
    const axiosPublic=useAxiosPublic()
  const handleSubmitForm= async(e)=>{

       e.preventDefault()
       const form= new FormData(e.currentTarget)
       const email= form.get('email')
       const password= form.get('password')
        
       const userInfo= {email,password}
       console.log(userInfo);
      handleLogin(userInfo)
      .then(res=>{
        if (res.data.success===true) {
           toast.success('Logged In Successful')
        }
        localStorage.setItem('token',res.data.token)
      })
      .catch(error=>{
        console.log(error);
      })
  
        
  }
    return (
      
            <div className="  ">

      <form onSubmit={handleSubmitForm} className="card-body space-y-6 text-black p-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control w-3/12 mt-6">
          <button className="btn bg-[#FF385C] text-white">Login</button>
        </div>
      </form>
 
</div>

    
    );
};

export default Login;