import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const authinfo = { googlesignin, createUser, loginUser, loading, user, logout }
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