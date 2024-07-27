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
import { auth, db,storage } from "@/firebase/initializer";
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
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [tapData, settapData] = useState(null); // if the person is the club verified
  const [content, setContent] = useState(null); // if the person is the club verified
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


      // // Create a reference to the file we want to download
      // const storage = getStorage();
      // const starsRef = ref(storage, 'testing/as.jpg');

      // // Get the download URL
      // getDownloadURL(starsRef)
      //   .then((url) => {
      //     // Insert url into an <img> tag to "download"
      //     console.log(url)
      //   })
      //   .catch((error) => {
      //     // A full list of error codes is available at
      //     // https://firebase.google.com/docs/storage/web/handle-errors
      //     switch (error.code) {
      //       case 'storage/object-not-found':
      //         console.log("File doesn't exist")
      //         break;
      //       case 'storage/unauthorized':
      //         console.log("User doesn't have permission to access the object")
      //         break;
      //       case 'storage/canceled':
      //         console.log("User canceled the upload")
      //         break;

      //       // ...

      //       case 'storage/unknown':
      //         console.log("Unknown error occurred, inspect the server response")
      //         break;
      //     }
      //   });



    }
    recheck()
    return () => recheck();
  }, [auth.currentUser]);

// delete image
  const deleteImage = async (imageUrl) => {
    const storageRef = ref(storage, imageUrl);
    try {
      await deleteObject(storageRef);

    } catch (error) {
      console.error("Failed to delete image:", error);
    }
  };

// upload image on the firebase
  const uploadImage = async (imageFile) => {
    const storageRef = ref(storage, `images/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };



  // fetch data for the root
  const fetchData = async (root) => {
    
      //all  data
    await getDocs(collection(db, root))
      .then((querySnapshot) => {
        const newData = {};

        querySnapshot.docs.forEach((doc) => {
          newData[doc.id] = doc.data();
        });
        setContent(newData);
        console.log(newData)
      })
      .catch((e) => console.log(e));
  };
  // fetch data for the tap
  const fetchTaps = async () => {
    
    await getDocs(collection(db, "categories/faucet/mixture"))
      .then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
      });
      })
      .catch((e) => console.log(e));
      //all tap data
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
  const setTapData = async(data, id) => {
    if (id) {
      return updateDoc(doc(db, "Tap", id), data);
    }

    // Add a new document and get its reference
    const docRef = await addDoc(collection(db, "Tap"), {
      ...data,
      postedTime: new Date(),
  });

  // Update the newly created document with its own UID
  await updateDoc(docRef, { uid: docRef.id });

  return docRef;
  };

  //delete data

  const deleteData = (id,root) => {
    deleteDoc(doc(db, root, id));
  }
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
        deleteData,
        uploadImage,
        deleteImage,
        content,
        fetchData
        // loading
      }}
    >
      <>
        {childDisplay && children}
      </>
    </AuthContext.Provider>
  );
};