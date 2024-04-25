// 'use client'
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDS5C46LTPQmvxRkdpI-w7aWrDX7PuTQSs",
    authDomain: "abhisheksinghal-5f554.firebaseapp.com",
    projectId: "abhisheksinghal-5f554",
    storageBucket: "abhisheksinghal-5f554.appspot.com",
    messagingSenderId: "117685329931",
    appId: "1:117685329931:web:2146c80509eacc307c670e",
    measurementId: "G-SD2XRGNWD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export const getdata = async () => {
    // const citiesCol = collection(db, 'products');
    const citySnapshot = await getDocs(collection(db, 'products'));
    console.log(citySnapshot)
    const cityList = citySnapshot.docs.map(doc => doc.data());
    // console.log(cityList)
    return cityList;
}

export const getInputMasterTable = async () => {
    let Data = {}
    db.collection('inputMasterTable').doc('text').get()
        .then(doc => {
            if (doc.exists) {
                const text = doc.data().text;
                const newData = {};

                // Iterate through each text value
                text.forEach(async textValue => {
                    // Get the documents from the "Text" subcollection for each text value
                    const querySnapshot = await db.collection('inputMasterTable').doc('text').collection('Text').where('text', '==', textValue).get();
                    const documents = querySnapshot.docs.map(doc => doc.data());

                    // Assign the documents to the corresponding text value in the newData object
                    newData[textValue] = documents;

                    // Update state with the newData object
                    setData(prevData => ({ ...prevData, ...newData }));
                });
            }
        })
        .catch(error => {
            console.error('Error getting documents: ', error);
        });


        
    return cityList;
}