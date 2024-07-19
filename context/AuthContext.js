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
import { getDownloadURL, getStorage, ref } from "firebase/storage";

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
    const recheck = async () => {
      console.log("first")
      await fetchTaps(); // if user is authenticate to any of the club then it will call its id
      setchildDisplay(true)


      // Create a reference to the file we want to download
      const storage = getStorage();
      const starsRef = ref(storage, 'testing/as.jpg');

      // Get the download URL
      getDownloadURL(starsRef)
        .then((url) => {
          // Insert url into an <img> tag to "download"
          console.log(url)
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              console.log("File doesn't exist")
              break;
            case 'storage/unauthorized':
              console.log("User doesn't have permission to access the object")
              break;
            case 'storage/canceled':
              console.log("User canceled the upload")
              break;

            // ...

            case 'storage/unknown':
              console.log("Unknown error occurred, inspect the server response")
              break;
          }
        });



    }
    recheck()
    return () => recheck();
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

  const deleteTapData = (id) => {
    deleteDoc(doc(db, "Tap", id));
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