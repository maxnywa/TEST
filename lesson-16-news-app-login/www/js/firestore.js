const FirestoreInit = (function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAlNAZPYFE25zVgmhm_GCaA7iyTkoyNt34",
        authDomain: "news-app-f20e8.firebaseapp.com",
        databaseURL: "https://news-app-f20e8.firebaseio.com",
        projectId: "news-app-f20e8",
        storageBucket: "news-app-f20e8.appspot.com",
        messagingSenderId: "266459657459"
    };
    firebase.initializeApp(config);
})();