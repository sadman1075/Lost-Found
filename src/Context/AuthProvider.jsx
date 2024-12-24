import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const googlesignin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileuser = (updateuserProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateuserProfile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("state captured", currentUser?.email)
            if (currentUser?.email) {
                const user = { email: currentUser.email }


                axios.post("http://localhost:5000/jwt", user,{withCredentials:true})
                    .then(res => console.log("login", res.data))
                setLoading(false)
            }


            else {
                axios.post("http://localhost:5000/logout", {}, { withCredentials: true })
                    .then(res => console.log("logout", res.data))
                setLoading(false)
            }

        })
        return () => unsubscribe()
    }, [])

    const authinfo = { googlesignin, createUser, loginUser, updateProfileuser, loading, user, setUser, logout }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;