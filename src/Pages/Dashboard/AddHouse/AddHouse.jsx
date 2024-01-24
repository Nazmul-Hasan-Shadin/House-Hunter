
import { useForm } from "react-hook-form";



import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";



const AddHouse = () => {
  const {user}=useContext(AuthContext)



  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
 
     let modifiedData= data
     modifiedData.email= user?.email
     console.log(modifiedData);

   const postHouse=  await axiosPublic.post('/houses',modifiedData)
   console.log(postHouse);






  };
 

  return (
    <div className="hero min-h-screen bg-base-200 w-full">
  
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card  sm:max-w-[900px] md:w-full  shadow-2xl bg-base-100 ">
     
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body  grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">House Name</span>
                </label>

                <input
                 
                  {...register("name")}
                  type="text"
                  placeholder="product name"
                  className="input input-bordered  w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">House Image</span>
                </label>

                <input
                 
                  {...register("image")}
                  type="text"
                  placeholder="product name"
                  className="input input-bordered  w-full"
                  required
                />
              </div>
     

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bathroom Quantity</span>
                </label>
                <input
                 
                  {...register("bathroom")}
                  type="number"
                  name="quantity"
                  placeholder="product quantity"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text"> location</span>
                </label>
                <input
               
                  {...register("location")}
                  type="text"
                  placeholder="location "
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Badroom </span>
                </label>
                <input
                 
                  {...register("bedroom")}
                  placeholder="product cost"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Room Size</span>
                </label>
                <input
                 
                  {...register("size")}
                  type="number"
                  placeholder="profit"
                  className="input input-bordered"
                  required
                />
              </div>

           

              <div className="form-control">
                <label className="label">
                  <span className="label-text">city</span>
                </label>
                <input
               
                  {...register("city")}
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>

           

      
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value='Add House'
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHouse;