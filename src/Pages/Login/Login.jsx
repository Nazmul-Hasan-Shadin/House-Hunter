

const Login = () => {
  const handleSubmitForm=(e)=>{
       e.preventDefault()
       const form= new FormData(e.currentTarget)
       const name= form.get('name')
       const password= form.get('password')
       const email= form.get('email')
       const role= form.get('role')

       console.log( name,password,email,role);
  }
    return (
      
            <div className="  ">

      <form onSubmit={handleSubmitForm} className="card-body space-y-6 p-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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