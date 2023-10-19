// import {  createContext, useEffect, useState } from "react";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import app from "../Firebase/firebase.config";


//  export const AuthContext =createContext(null);

// const auth = getAuth(app);


// const AuthProvider = ({children}) => {
//       const [user,setUser] = useState(null);
//       const [loading,setLoading] = useState(true);
//       const googleProvider = new GoogleAuthProvider();

//       const createUser =(email,password) =>{
//             setLoading(true);
//             return createUserWithEmailAndPassword(auth,email,password);
//       }

//       const signIn = (email,password) =>{
//             setLoading(true);
//             return signInWithEmailAndPassword (auth,email,password);
//       }

//       const logOut = () =>{
//             setLoading(true);
//             return signOut(auth);
//       }

//       const updateUser = (value) =>{
//             return updateProfile(auth.currentUser, value);
    
//         }

//       const signInWithGoogle = () =>{
//             return signInWithPopup(auth, googleProvider);
//         }


//       useEffect (() => {
//             const unSubscribe = onAuthStateChanged(auth,currentUser =>{
//                   console.log('user in the auth state changed',currentUser);
//                   setUser (currentUser);
//                   setLoading(false);
//             });
//             return() => {
//                   unSubscribe();
//             }
//       },[])

//       const authInfo = {
//             user,
//             loading,
//             createUser,
//             signIn,
//             updateUser,
//             logOut, 
//             signInWithGoogle

//       }
//       return (
//             <AuthContext.Provider value={authInfo} >
//             {children}       
//             </AuthContext.Provider>
//       );
// };

// export default AuthProvider;