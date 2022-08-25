  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDu_HGFTaf_JEepCGCbmFvL1-vMsHOVrMQ",
    authDomain: "projeto-mundo-invertido.firebaseapp.com",
    projectId: "projeto-mundo-invertido",
    storageBucket: "projeto-mundo-invertido.appspot.com",
    messagingSenderId: "792527935313",
    appId: "1:792527935313:web:9dd5c74c3c20fa7dcd2570"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  export default app