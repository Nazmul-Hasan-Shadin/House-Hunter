
import { Link } from 'react-router-dom';

const House = ({house}) => {

 const {image,name,bathroom,location,bedroom,size}=house || {}
    return (
        <div data-aos='fade-up'   className="card   dark:bg-base-100     shadow ">
        <figure>
          <img className="w-[100%] h-[300px] px-4" src={image} alt="" />
          </figure>
        <div  className="card-body ">
        <p className='text-start text-xl'> <span className="text-blue-600">{name} </span></p>
          <div className="grid grid-cols-2 w-[100%] text-start gap-5  ">
              <p className=" ">location: {location} </p>
      
              <p className="ml-3 ">bathroom: {bathroom}</p>
              <p className=" "> area:   {size} sqr/ft</p>
              <p className=" ml-3"> bedroom: {bedroom}</p>
          </div>
          <div>
   
          <div className="card-actions gap-10 mb-4 justify-between ">
            <p className="text-[#f53c3c] font-extrabold "> price: {"$400"} </p>
            <p  className="font-bold "> category: {"category"} </p>
          </div>
          {/* <span className="flex justify-between "> 
          <Link className='' to={`/findbooksbyid/${_id}`}> <button className="btn ">Details</button></Link>
          </span> */}
          </div>
        </div>
      </div>
    );
};

export default House;