import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const logOutHndler = ()=>{
        logOut();
    }
    const navList = <>
                        <li><NavLink to="/rooms">Rooms</NavLink></li>
                        <li><NavLink to="/myboking">My Bookings</NavLink></li>
                        {
                            user ? 
                            <>
                               <li><button onClick={logOutHndler}>Log Out</button></li>
                            </> 
                            :
                            <>
                               <li><NavLink to="/login">Log In</NavLink></li>
                               <li><NavLink to="/register">Sign Up</NavLink></li>
                            </>
                        }                     
                    </>;

    return (
        <div className="navbar bg-base-100 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Seven Star</a>
            </div>
            {
                user &&  <div className="navbar-end lg:hidden">
                            <div className="avatar online border rounded-full p-1">
                                <div className="w-5 h-5 rounded-full">
                                    <img src={user?.photoURL} title={user?.displayName} />
                                </div>
                            </div>
                        </div>
            }
            <div className="navbar-end hidden lg:flex">
                <ul className="flex items-center menu menu-horizontal px-1">
                    {navList}
                    {
                        user &&  <div className="avatar online border rounded-full p-1">
                                    <div className="w-7 h-7 rounded-full">
                                        <img src={user?.photoURL}  title={user?.displayName} />
                                    </div>
                                </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;