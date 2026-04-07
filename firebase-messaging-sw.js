// 🔥 IMPORTS (COMPAT - OBRIGATÓRIO)
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// 🔥 FIREBASE CONFIG
firebase.initializeApp({
  apiKey: "AIzaSyCNQ5SPMtnAbPvC11kYv-t2xEDoc8QuR8A",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:2ea58294b93441b47c5d4f"
});

const messaging = firebase.messaging();

// 🚀 FORÇA ATIVAÇÃO IMEDIATA
self.addEventListener("install", (event) => {
  console.log("🔥 SW INSTALANDO...");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("🔥 SW ATIVANDO...");
  event.waitUntil(self.clients.claim());
});

// 🔥 RECEBER PUSH
messaging.onBackgroundMessage(function (payload) {
  console.log("🔥 PUSH RECEBIDO:", payload);

  const notificationTitle = payload.notification?.title || "Nova notificação";
  const notificationOptions = {
    body: payload.notification?.body || "Mensagem recebida",
    icon: "/icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
