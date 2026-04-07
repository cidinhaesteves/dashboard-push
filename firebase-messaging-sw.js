// 🔥 IMPORTS CORRETOS PARA SERVICE WORKER
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// 🔥 CONFIG FIREBASE
firebase.initializeApp({
  apiKey: "AIzaSyCNQ5SPMtnAbPvC11kYv-t2xEDoc8QuR8A",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:2ea58294b93441b47c5d4f"
});

// 🔥 INICIALIZA MESSAGING
const messaging = firebase.messaging();

// 🔥 RECEBER PUSH EM BACKGROUND
messaging.onBackgroundMessage(function (payload) {
  console.log("🔥 PUSH RECEBIDO (SW):", payload);

  const notificationTitle = payload.notification?.title || "Nova notificação";
  const notificationOptions = {
    body: payload.notification?.body || "Você recebeu uma mensagem",
    icon: "/icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
