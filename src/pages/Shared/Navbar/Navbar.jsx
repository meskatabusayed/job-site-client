import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const {user , logOut} = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
        .then(() => console.log('user Logged Out'))
        .catch(error => {
            console.log(error);
        })
    }

    const navLinks = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-800 border border-red-600 font-bold text-lg" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/addjob"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-800 border border-red-600 font-bold text-lg" : ""
              }
            >
              
            Add Job
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/mypostedjobs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-800 border border-red-600 font-bold text-lg" : ""
              }
            >
              
              My Posted Jobs
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/mybids"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-800 border border-red-600 font-bold text-lg" : ""
              }
            >
              
              My Bids
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/bidrequests"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-800 border border-red-600 font-bold text-lg" : ""
              }
            >
              
              Bid Requests
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-800 border border-red-600 font-bold text-lg" : ""
              }
            >
              
              Registration
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-800 border border-red-600 font-bold text-lg" : ""
              }
            >
              
            Login
            </NavLink>
            
          </li>
          </>
 )



  return (
    <div className="navbar bg-blue-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
           {navLinks}
          </ul>
        </div>
        <img className="w-16" src="https://i.ibb.co/MVJjFSC/JObify-1.png" alt="" />
        <a className="btn btn-ghost normal-case text-xl">Jobify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
              
        </ul>
      </div>
      <div className="navbar-end">
      {
            user ? <>
            <div className="avatar mr-2">
              <div className="w-24 rounded">
                <img src={user.photoURL} />
              </div>
            </div>
            <span>{user.displayName}</span>
            <a onClick={handleLogOut} className="btn btn-primary ml-2">Sign Out</a>
            </>
            :
            <Link to='/signin'>
                 <button  className="btn btn-primary ">Sign In</button>
            </Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
