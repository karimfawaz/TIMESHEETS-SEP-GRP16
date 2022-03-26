// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDU4zHh5w6L5ptMuWRgvxoOCWUc7G0Mt6o",
    authDomain: "dailytimetracker-3aa98.firebaseapp.com",
    projectId: "dailytimetracker-3aa98",
    storageBucket: "dailytimetracker-3aa98.appspot.com",
    messagingSenderId: "366181352071",
    appId: "1:366181352071:web:4716240582dd905fc1ae22"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// variables for Firebase
const auth = firebase.auth()
const database = firebase.database()

// login funtion
function login() {
    // get all the elements from the HTML form
    username = document.getElementById('username').value
    password = document.getElementById('password').value

    // validate the fields
    if (validate_password(password) == false) {
        alert('Password too short')
        return
    }
    if (validate_field(username) == false || validate_field(password) == false) {
        alert('Your username/password is missing or not correct')
        return
    }

    // check the user against Firebase DB
    auth.signInWithUsernameAndPassowrd(username, password)
        .then(function () {
            // AUTH SYSTEM TO DO
            let reference = database().ref("/users")
            ref.orderByChild("username").equalTo(username).on("value", function (snapshot) {
                if (snapshot.exists()) {
                    console.log('User exists')
                }
                else {
                    console.log('Incorrect username/password.')
                }
            })


        })
        .catch(function () {
            //catch error with the DB
            var error_code = error.code
            var error_message = error.message
            alert(error_message)
        })
}


// validate password
function validate_password(password) {
    // Only passwords with more than 6 characters accepted
    if (password < 6) {
        // password less than 6 characters
        return false
    }
    else {
        // good password
        return true
    }
}

// function to check if fields are empty
function validate_field(field) {
    if (field.length <= 0 || field == null) {
        // field not good
        return false
    }
    else {
        // field good
        return true
    }
}