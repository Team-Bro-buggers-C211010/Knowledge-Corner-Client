import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentLoggedUser => {
            setUser(currentLoggedUser);

            const authUser = { email: user.email }
            // get access token
            axiosSecure.post('/jwt', authUser) // This withCredentials is important to set cookie in network
                .then(res => {
                    console.log(res.data);
                    if (res.data.success) {
                        setLoading(false);
                        console.log("Token Success")
                    }
                })
                .catch(error => {
                    setLoading(false);
                })
            setLoading(false);
            console.log(currentLoggedUser);
        })
        return () => {
            unsubscribe();
        }
    }, [user])

    const authInfo = { user, update, setLoading, setUser, setUpdate, loading, signInWithGoogle, createUser, signInUser, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;