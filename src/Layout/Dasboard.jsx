import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaCartArrowDown,
  FaCartPlus,
  FaHome,
  FaList,
  FaPlus,
  FaProductHunt,
  FaUsers,
} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";




import useRoleCheck from "../hooks/useRoleCheck";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  const [data,isLoading] = useRoleCheck();

 const[renter,setRenter]=useState(true)
  console.log(data)

  const { handleLogOut } =  useContext(AuthContext);
  return (
    <div className="flex  m-0 flex-col lg:flex-row  ">
      <div className=" w-80 ">
        <div className="drawer text-white  lg:drawer-open z-20">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side  ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            {/* Sidebar content here */}
   

            <ul className=" menu p-4 w-60 min-h-full bg-slate-900 fixed  text-white  ">

              {/* =======================a==================Manager routes================================== */}

           {/* avatar */}
              {data?.data?.owner && (
                <>
                                  <li>
                    {" "}
                    <Link to={"/"}>
                      <FaHome></FaHome>
                      Go Home{" "}
                    </Link>{" "}
                  </li>

               
                  <li>
                    {" "}
                    <Link to={"/dashboard"}>
                      <FaPlus />
                      Add House{" "}
                    </Link>{" "}
                  </li>


         
             

                  <li>
                    {" "}
                    <Link to={"/dashboard/properties"}>
                      <CiViewTable />
                      My Properties{" "}
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to={"/dashboard/checkout/paid"}>
                      <FaCartPlus></FaCartPlus>
                      Carts{" "}
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to={"/dashboard/sell-summery"}>
                      <FaCartPlus></FaCartPlus>
                      Sale Summery{" "}
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to={"/dashboard/payment"}>
                      <FaHome></FaHome>
                      Payment{" "}
                    </Link>{" "}
                  </li>

      
                  <li>
                    {" "}
                    <Link to={"/dashboard/subscription"}>
                      <FaHome></FaHome>
                      subscription{" "}
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link onClick={() => handleLogOut()} to={"/"}>
                      <FaHome></FaHome>
                      Logout{" "}
                    </Link>{" "}
                  </li>

                </>
              )}
              {/* =========================================System admin route============================================================ */}
          
          
              {data?.owner && (
                <>
                  <li>
                    {" "}
                    <Link to={"/mainDashboard/all-store"}>
                      <MdManageAccounts />
                      Manage Shop{" "}
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to={"/mainDashboard/syssale-summery"}>
                      <FaCartArrowDown />
                      Admin Sales Summery{" "}
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to={"/mainDashboard/all-users"}>
                      <FaUsers />
                      Admin Users{" "}
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to={"/mainDashboard"}>
                      <FaHome></FaHome>
                      Home{" "}
                    </Link>{" "}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* </div> */}

      <div className=" w-full  lg:max-w-7xl mx-auto md:p-12 lg:p-0">
    
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;