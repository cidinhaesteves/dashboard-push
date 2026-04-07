// 🔥 FORÇA ATIVAÇÃO IMEDIATA DO SERVICE WORKER
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// 🔥 FORÇA O SW A CONTROLAR A PÁGINA
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// 🔥 IMPORTS FIREBASE (VERSÃO COMPAT)
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// 🔥 CONFIG DO SEU FIREBASE (CONFIRMADO PELAS IMAGENS)
firebase.initializeApp({
  apiKey: "AIzaSyCNQ5SPMtnAbPvC11kYv-t2xEDoc8QuR8A",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:2ea58294b93441b47c5d4f",
  measurementId: "G-RJVTG24IK0"
});

// 🔥 INICIALIZA MESSAGING
const messaging = firebase.messaging();

// 🔥 RECEBER PUSH EM BACKGROUND
messaging.onBackgroundMessage(function(payload) {
  console.log("🔥 PUSH RECEBIDO NO SW:", payload);

  const title = payload.notification?.title || "Notificação";
  const options = {
    body: payload.notification?.body || "Você recebeu uma mensagem",
    icon: "/icon.png"
  };

  self.registration.showNotification(title, options);
});
