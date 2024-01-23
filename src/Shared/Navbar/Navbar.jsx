import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links= <>
               <li>  <Link to='/home'>Home</Link> </li>
               <li>  <Link to='/home'>Login</Link> </li>
               <li>  <Link to='/home'>Dashboard</Link> </li>
               <li>  <Link to='/home'>Contact</Link> </li>
               <li>  <Link to='/home'>Properties</Link> </li>
   
   
    </>
    const rightLinks= <>
     <li>  <Link to='/home'>Home</Link> </li>

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
      </div>
    );
};

export default Navbar;