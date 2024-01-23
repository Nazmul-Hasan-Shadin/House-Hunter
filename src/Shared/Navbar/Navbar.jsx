
import { Link } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Register from '../../Pages/Register/Register';
import { FaDeleteLeft } from "react-icons/fa6";

const Navbar = () => {
    const links= <>
               <li >  <Link  to='/'>Home</Link> </li>
             
               <li>  <Link to='/home'>Dashboard</Link> </li>
               <li>  <Link to='/home'>Contact</Link> </li>
               <li>  <Link to='/home'>Properties</Link> </li>
   
   
    </>
    const rightLinks= <>
     <li>  <Link to='/home'>Home</Link> </li>
     <li> <button onClick={()=>document.getElementById('my_modal_5').showModal()}>Register</button> </li>

   <li>

   </li>
      
    </>
    return (
        <div className="navbar text-white -z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu   menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        links
       }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
          
          <div className='w-2/3 justify-between    navbar-center hidden lg:flex '>

          <ul className="menu menu-horizontal   px-1">
          {
            links
          }
          </ul>
          
    

   
          <ul className="menu  menu-horizontal px-1">
          {
            rightLinks
          }
             <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
          </ul>
          
        </div>
      

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>

        {/* modal */}

        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" >open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
  <div className="modal-box ">
    <h3 className="font-bold text-lg text-black mb-7">Welcome to Hose <span className='text-[#FF385C]'>Hunter</span></h3>
    <div className='divider'></div>
    <div className='w-full flex flex-col gap-3 '>
      <button className='btn text-white w-full bg-[#3B5998]'>
       Facebook
      </button>

      <button className='btn text-white  w-full bg-[#55ACEE]'>
       Twitter
      </button>

    </div>

    <div className='divider text-black'> Or</div>
  <div className='my-6'>
  <Tabs>
    <TabList className={'flex gap-6 '}>
      <Tab> <button className='btn px-9 text-white bg-[#FF385C]'>Log in</button> </Tab>
      <Tab><button  className='btn px-7 text-white bg-[#FF385C]'>Register</button> </Tab>
    </TabList>

    <TabPanel>
    <Login></Login>
    </TabPanel>
    <TabPanel>
       <Register></Register>
    </TabPanel>
  </Tabs>
  </div>
   
    <div className="modal-action">
      <form className='absolute top-0 ' method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-3xl bg-[#FF385C] rounded-full p-2 text-white  "> <FaDeleteLeft /> </button>
      </form>
    </div>
  </div>
</dialog>
      </div>
    );
};

export default Navbar;