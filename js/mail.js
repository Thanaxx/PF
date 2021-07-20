  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVDhBjuCTWYJDMgCr1vM09qVNImMig2JM",
    authDomain: "modernportfolio-9ecc2.firebaseapp.com",
    projectId: "modernportfolio-9ecc2",
    storageBucket: "modernportfolio-9ecc2.appspot.com",
    messagingSenderId: "1008117047910",
    appId: "1:1008117047910:web:67905e1191eee79ddd43a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    //reference contact info collections
    let contact = firebase.database().ref("modernportfoliomails");

      //Listen for the submit
    var forms = document.querySelector(".mail");

    forms.addEventListener('submit', submitform);

    function submitform(e){
        e.preventDefault();

        // get infos in the form
        let name = document.querySelector(".username").value;
        let email = document.querySelector(".userEmail").value;
        let message = document.querySelector(".userMessage").value;

        // console.log(name, email, message);

        saveContactInfo(name, email, message);
  
        document.querySelector(".mail").reset();
  
        sendEmail(name, email, message);
    }

      //Save infos to firebase
    function saveContactInfo(name, email, message){
    let newContactInfo = contact.push();

      newContactInfo.set({
        Name : name,
        Email: email,
        Message: message,
      })
    }

      //send email function
    function sendEmail(name, email, message){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "abordajechristeljoy@gmail.com",
            Password : "rgtirwafjnhnwzkd",
            To : 'abordajechristeljoy@gmail.com',
            From : `${email}`,
            Subject : `${name} sent you a message!`,
            Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
        })
        .then((message) => alert("mail sent successfully"));
    }