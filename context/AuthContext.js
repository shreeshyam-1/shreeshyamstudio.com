"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "@/firebase/initializer";
import { useRouter } from "next/navigation";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
  orderBy,
  deleteDoc
} from "firebase/firestore";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [tapData, settapData] = useState(null); // if the person is the club verified
  const [childDisplay, setchildDisplay] = useState(false); // if the person is the club verified
  const router = useRouter();

  //   Check weather the user was logged in or not
  useEffect(() => {
    // run every time when the login or logout was performed
    console.log("11")
    recheck()
    const recheck = async()=>{
      console.log("first")
      setchildDisplay(true)
      await fetchTaps(); // if user is authenticate to any of the club then it will call its id
    }
    return ()=> recheck();
  }, [auth.currentUser]);



  // fetch data for the tap
  const fetchTaps = async () => {
    console.log("first")
      // all tap data
      console.log("as")
      await getDocs(collection(db, "Tap"))
        .then((querySnapshot) => {
          const newData = {};

          querySnapshot.docs.forEach((doc) => {
            newData[doc.id] = doc.data();
            newData[doc.id].uid = doc.id;
          });
          settapData(newData);
          console.log(newData)
        })
        .catch((e) => console.log(e));
  };

    // update or add data
  const setTapData = (data, id) => {
    if (id) {
      return updateDoc(doc(db, "Tap", id), data);
    }
    data = {
      ...data,
      postedTime: new Date(),
    };
    return addDoc(collection(db, "Tap"), data);
  };

  //delete data

  const deleteTapData = (id)=>{
     deleteDoc(doc(db, "Tap" ,id));
  }

  
  return (
    <AuthContext.Provider
      value={{
        // returning all the essential functions and variables
        tapData,
        childDisplay,
        setTapData,
        fetchTaps,
        deleteTapData,
        // loading
      }}
    >
      <>
      {childDisplay && children}
      </>
    </AuthContext.Provider>
  );
};