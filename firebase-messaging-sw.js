importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCN0S5pMthAbPyC1LkYy-t2xFDoc8QuR8A",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870991742",
  appId: "1:31870991742:web:2ea58294b93441b47c5d4f",
  measurementId: "G-RJVTCZ41QX"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Push recebido:', payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
