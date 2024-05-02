// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDS5C46LTPQmvxRkdpI-w7aWrDX7PuTQSs",
//     authDomain: "abhisheksinghal-5f554.firebaseapp.com",
//     projectId: "abhisheksinghal-5f554",
//     storageBucket: "abhisheksinghal-5f554.appspot.com",
//     messagingSenderId: "117685329931",
//     appId: "1:117685329931:web:2146c80509eacc307c670e",
//     measurementId: "G-SD2XRGNWD7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// export default async function GET() {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }