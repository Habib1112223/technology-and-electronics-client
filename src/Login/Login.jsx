import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Pages/Navbar/Navbar";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
      const navigate = useNavigate()
      // const { signIn, signInWithGoogle } = useContext(AuthContext);
      const [error, setError] = useState('');
      const location = useLocation();

      const from = location.state?.from?.pathname || '/';


      const handleLogin = e => {
            e.preventDefault();
            setError('')
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget)
            const email = form.get('email');
            const password = form.get('password');
            signIn(email, password)
                  .then(result => {
                        console.log(result)
                        Swal.fire('Successfully Login')
                        navigate(from, { replace: true })
                  })
                  .catch(error => {
                        setError(error.message)
                  })
      }

      const handleSignInWithGoogle = () => {
            signInWithGoogle()
                  .then((result) => {
                        const user = result.user;
                        console.log(user);
                        navigate(from, { replace: true })
                        Swal.fire("Successfully")
                  })
                  .catch(error => setError(error.message))
      }
      return (

            <div>
                  <Navbar></Navbar>

                  <div className="hero h-[500px] mt-14 bg-amber-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                              <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Please Login</h1>
                                    <p className="py-6"> A login allows individuals to access their personalized accounts, ensuring security and privacy while interacting with digital platforms..</p>
                              </div>
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleLogin} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                                </label>
                                          </div>
                                          {
                                                error && <p className="text-red-500 ">{error}</p>
                                          }
                                          <div className="form-control mt-6">
                                                <button type="submit" className="btn bg-orange-400 hover:bg-orange-500">Login</button>
                                          </div>
                                    </form>
                                    <p className="text-center">Do not have an account?<Link className="text-purple-600 font-bold" to="/register"> Register</Link></p>
                              </div>
                              <div className="text-center">
                        <button onClick={handleSignInWithGoogle} className="btn bg-amber-500  hover:bg-amber-500 font-bold px-10 py-1 text-white">google</button>
                  </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;