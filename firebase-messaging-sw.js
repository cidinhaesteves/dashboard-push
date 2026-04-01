// ================================
// IMPORTS FIREBASE (COMPAT)
// ================================
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// ================================
// CONFIG FIREBASE
// ================================
firebase.initializeApp({
  apiKey: "AIzaSyCJzv86uRlFRAX1CBVejno1_89VD90J3OY",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:f75d7509b351bfac7c5d4f",
  measurementId: "G-G286HDQQJZ"
});

// ================================
// INIT MESSAGING
// ================================
const messaging = firebase.messaging();

// ================================
// RECEBER PUSH EM BACKGROUND
// ================================
messaging.onBackgroundMessage(function (payload) {
  console.log("📩 PUSH RECEBIDO:", payload);

  const title =
    payload.notification?.title ||
    payload.data?.title ||
    "Nova notificação";

  const body =
    payload.notification?.body ||
    payload.data?.body ||
    "Você recebeu uma mensagem";

  self.registration.showNotification(title, {
    body: body,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
  });
});
