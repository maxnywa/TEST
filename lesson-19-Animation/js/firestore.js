const FirestoreInit = (function () {
    let instance;
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA9newHXV5gMiAV6pCZ6PIFHonKFJVeL08",
        authDomain: "favorite-news-95cd0.firebaseapp.com",
        databaseURL: "https://favorite-news-95cd0.firebaseio.com",
        projectId: "favorite-news-95cd0",
        storageBucket: "favorite-news-95cd0.appspot.com",
        messagingSenderId: "920696065638"
    };
    firebase.initializeApp(config);
    var db = firebase.firestore();

    function getDb() {
        return db;
    }

    function createInstance() {
        return{
            getDb
        }
    }

    return{
        getInstance(){
            return instance || (instance = createInstance() )
        }
    }
})();