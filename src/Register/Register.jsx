import { Link } from "react-router-dom";
import Navbar from "../Components/Pages/Navbar/Navbar";


const Register = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="text-center bg-amber-100">
                        <h3 className="text-3xl py-2 mx-auto font-bold text-orange-500">Register your account</h3>
                        <form  className=" md:w-3/4 lg:w-1/2 mx-auto">
                              <div className="form-control flex">
                                    <label className="label">
                                          <span className="label-text"> Your Name</span>
                                    </label>
                                 {/* <div>   <h2 className="text-3xl">Name:</h2></div> */}
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text"> Your Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text"> Your Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text"> Your Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder=" Your Password" className="input input-bordered" required />
                                    <label className="label">
                                          <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>


                              </div>
                              {/* {
                                    passwordError && <p className="text-red-700">{passwordError}</p>
                              } */}

                              <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-orange-400  hover:bg-orange-500 font-bold">Register</button>
                              </div>
                        </form>
                        {/* {
                              error && <p className="text-red-700">{error}</p>
                        } */}

                        <p className="text-center mt-4">Already have an account? <Link className="text-amber-600 font-bold" to="/login"> Login</Link></p>

                  </div>
                  
            </div>
      );
};

export default Register;