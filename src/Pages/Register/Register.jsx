const Register = () => {
  return (
    <div className="  ">
      <form className="card-body space-y-6 p-0">
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

        <select className="select select-bordered text-black w-full max-w-xs">
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
