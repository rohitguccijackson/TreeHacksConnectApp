firebase.initializeApp({
    apiKey: "AIzaSyAKdkrS_djN7ZO0bo3S5QUCm8KYjc-juS8",
    authDomain: "treehacksconnect.firebaseapp.com",
    projectId: "treehacksconnect",
    storageBucket: "treehacksconnect.appspot.com",
    messagingSenderId: "617939153531",
    appId: "1:617939153531:web:437c25c0c8d74dadf3e8de"
});
var db = firebase.firestore();

function clicked(){
    let userInput = document.getElementById('user_name').value;
      db.collection("user-data").doc("oySyO7P7JFElPOfZ4Rdk").set({content: userInput})
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
  }  
  function load(){
    db.collection("user-data").doc("oySyO7P7JFElPOfZ4Rdk")
      .onSnapshot((doc) => {
          console.log("Current data: ", doc.data());
          document.getElementById('display').innerHTML = doc.data().content;
      });
  }
  