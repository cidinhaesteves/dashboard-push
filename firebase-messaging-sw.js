// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCN05SpMhAbPyC1lkVy-t2xFDoc8QuR8A",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:2ea58294b93441b47c5d4f",
});

const messaging = firebase.messaging();

// ❌ NÃO criar self.addEventListener('push')
// Firebase já cuida da notificação automaticamente

messaging.onBackgroundMessage((payload) => {
  console.log("🔥 PUSH RECEBIDO:", payload);
});
