const firebase = require('firebase');

// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

// Function to fetch data from Firebase
async function fetchDataFromFirebase(arg1, arg2) {
    try {
        const snapshot = await firebase.database().ref('your-database-path').get();
        const data = snapshot.val();
        
        // Return the value associated with the arguments
        return data[arg1][arg2];
    } catch (error) {
        console.error('Error fetching data from Firebase:', error);
        throw error;
    }
}

module.exports = fetchDataFromFirebase;