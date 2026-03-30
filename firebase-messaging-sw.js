importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// ==============================
// FIREBASE CONFIG (SEU PROJETO)
// ==============================
firebase.initializeApp({
  apiKey: "AIzaSyCJzv86uRLFRAX1CBVejno1_89VD90J3OY",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:f75d7509b351bfac7c5d4f",
  measurementId: "G-G286NDQQJZ"
});

const messaging = firebase.messaging();

// ==============================
// RECEBER PUSH (FIREBASE CORRETO)
// ==============================
messaging.onBackgroundMessage(function (payload) {
  console.log("🔥 PUSH RECEBIDO:", payload);

  const title = payload.data?.title || "Nova mensagem";
  const body = payload.data?.body || "Você tem uma notificação";

  self.registration.showNotification(title, {
    body: body,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
  });
});
