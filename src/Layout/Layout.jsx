
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import './Layout.css'
const Layout = () => {
    return (
  <div className='  ' >
            <div className='bg-heroo  bg-top    z-[5]  h-[100vh] bg-cover bg-no-repeat bg-  '>
             <div className='relative top-5    '>
             <Navbar  className='z-[8]'></Navbar>
          
        </div>

       
        </div>
        <Outlet></Outlet>
  </div>



    );
};

export default Layout;