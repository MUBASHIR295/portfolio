const firebaseConfig = {
    apiKey: "AIzaSyBgLK4Dxge2z7lbw5mUQXoH8kfSBYCWODc",
    authDomain: "myportfolio-8bd12.firebaseapp.com",
    databaseURL: "https://myportfolio-8bd12-default-rtdb.firebaseio.com",
    projectId: "myportfolio-8bd12",
    storageBucket: "myportfolio-8bd12.appspot.com",
    messagingSenderId: "918705069986",
    appId: "1:918705069986:web:5ce0c7be7a665e09279cfb"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your firebase
var contactFormDB = firebase.database().ref('contactFrom'); // Corrected typo: contactFrom -> contactForm
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault(); // Corrected typo: preventDefult -> preventDefault

    var name = getElementval('Name'); // Use 'Name' as per input name attribute
    var emailid = getElementval('email'); // Use 'email' as per input name attribute
    var message = getElementval('Message'); // Use 'Message' as per textarea name attribute

    // Push data to Firebase
    contactFormDB.push({
        name: name,
        email: emailid,
        message: message
    })
    .then(() => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Clear form after submission
    })
    .catch((error) => {
        console.error("Error sending message: ", error);
        alert("Error sending message. Please try again.");
    });
}

const getElementval = (id) => {
    return document.querySelector(`[name="${id}"]`).value; // Get value by name attribute
};
