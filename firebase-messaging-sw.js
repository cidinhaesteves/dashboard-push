importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// 🔥 CONFIG FIREBASE (JÁ PREENCHIDO)
firebase.initializeApp({
  apiKey: "AIzaSyCN05SpMrHAbPyC1lkYy-t2xFDoc8QuR8A",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:2ea58294b93441b47c5d4f",
  measurementId: "G-RJVTG241KX"
});

const messaging = firebase.messaging();

// ==========================
// NOTIFICAÇÃO CORRETA (FIX DEFINITIVO)
// ==========================
messaging.onBackgroundMessage(function (payload) {
  console.log("🔥 PUSH RECEBIDO:", payload);

  // 👉 pega EXATAMENTE o que veio do backend
  const notificationTitle = payload.notification?.title || "Notificação";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: payload.notification?.icon || "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
    badge: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
