importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBspLYLvDhArpJG7UOcLQcPzjDNzyZrYGE",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:35e2d0b7fa5a8fb77c5d4f",
  measurementId: "G-P37K5DP7Y0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("🔔 Background:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});
