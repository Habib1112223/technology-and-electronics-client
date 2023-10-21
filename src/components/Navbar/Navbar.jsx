import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user?.uid && <>
                <li><NavLink to="/addProducts">Add Products</NavLink></li>
                <li><NavLink to="/my-carts">My Card</NavLink></li>
            </>}
    </>

console.log(user)
    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log("Logged out", res)
                navigate('/login', { replace: true })

            })
            .catch(error => {
                console.log('Error:', error)
            })
    }
    return (
        <div className="navbar rounded-lg" data-aos="fade-down">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-80">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <figure>
                        <img className="w-40 " src="/technology-and-electronics-high-resolution-logo-color-on-transparent-background.png" alt="" />
                    </figure>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.uid ?
                    <>
                        <button onClick={handleSignOut} className="px-8 py-1 border-1 rounded-sm bg-orange-500 mr-2 text-white">LogOut</button>
                        <h3 className="mx-2">{user?.displayName}</h3>

                        <div className="avatar">
                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </>

                    :

                    <>
                        <Link to="/login" className="px-8 py-1 border-1 rounded-sm bg-orange-500 mr-2 text-white">Login</Link>
                        <Link to="/register" className="px-8 py-1 border-1 rounded-sm bg-orange-500 mr-2 text-white">Register</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;