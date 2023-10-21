import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
      const { user, createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
      const [passwordError, setPasswordError] = useState('');
      const [error, setError] = useState("");
      const navigate = useNavigate();

      const handleRegister = e => {
            e.preventDefault();
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);

            const name = form.get('name');
            const photo = form.get('photo');
            const email = form.get('email');
            const password = form.get('password');
            console.log(name, photo, email, password);

            setPasswordError("")
            setError("")

            if (password.length < 6) {
                  setPasswordError("Password should be at least 6 characters.");
                  return
            } else if (!/[A-Z]/.test(password)) {
                  setPasswordError('Your password should have at least one upper case characters.');
                  return
            } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
                  setPasswordError('Your password should have at least one special character.');
            }

            // create user
            createUser(email, password)
                  .then(result => {
                        console.log(result.user);
                        const userProfile = {
                              displayName: name,
                              photoURL: photo
                        }
                        updateUser(userProfile)
                              .then(result => {
                                    console.log("Profile updated")
                                    navigate('/', { replace: true })
                                    Swal.fire("Successfully Account Created")
                              })
                              .catch(error => console.log(error.message))

                  })
                  .catch(error => {
                        console.error(error)
                        setError(error.message)
                  })

      }

      const handleSignInWithGoogle = () => {
            signInWithGoogle()
                  .then((result) => {
                        const user = result.user;
                        navigate('/', { replace: true })
                        Swal.fire("Successfully ")

                  })
                  .catch(error => setError(error.message))
      }



      return (

            <div className="py-10">
                  <h2 className="text-3xl my-10 text-center">Please Register</h2>
                  <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-700">Name</label>
                              <input
                                    type="text"
                                    required
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered border border-gray-300 px-4 py-3 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
                              />
                        </div>

                        <div className="mb-4">
                              <label htmlFor="photo" className="block text-gray-700">Photo URL</label>
                              <input
                                    type="text"
                                    required
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered border border-gray-300 px-4 py-3 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
                              />
                        </div>

                        <div className="mb-4">
                              <label htmlFor="email" className="block text-gray-700">Email</label>
                              <input
                                    type="email"
                                    required
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered border border-gray-300 px-4 py-3 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
                              />
                        </div>

                        <div className="mb-4">
                              <label htmlFor="password" className="block text-gray-700">Password</label>
                              <input
                                    type="password"
                                    required
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered border border-gray-300 px-4 py-3 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
                              />
                              {
                                    passwordError && <p className="text-red-500">{passwordError}</p>
                              }
                              <label className="text-gray-600 text-sm">
                                    <a href="#" className="link link-hover">Forgot password?</a>
                              </label>
                        </div>
                        {
                              error && <p className="text-red-500">{error}</p>
                        }

                        <div className="mt-6">
                              <button type="submit" className="px-6 py-1 bg-blue-500 border border-blue-500 hover:bg-blue-500 text-white">Register</button>
                        </div>
                  </form>

                  <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                  <div className="text-center">
                        <button onClick={handleSignInWithGoogle} className="btn bg-amber-500  hover:bg-amber-500 font-bold px-10 py-1 text-white">google</button>
                  </div>
            </div>
      );
};

export default Register;