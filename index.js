const firebaseConfig = {
    apiKey: "AIzaSyCkASQmqnhTdzOGDIEHkI8tEMNf38zeVZs",
    authDomain: "test-database-7b100.firebaseapp.com",
    databaseURL: "https://test-database-7b100-default-rtdb.firebaseio.com",
    projectId: "test-database-7b100",
    storageBucket: "test-database-7b100.appspot.com",
    messagingSenderId: "287763527653",
    appId: "1:287763527653:web:062679622e0edb93cde10c",
    measurementId: "G-227B4PRD9W"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

function createUser(config){
    firebase.auth().createUserWithEmailAndPassword(config.email, config.password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
    });
}
function message(msg, userID, sessionID){
    // add message to session
}
