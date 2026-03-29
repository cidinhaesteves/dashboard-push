importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCJzv86uRlFRAX1CBVejno1_89VD90J3OY",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:f75d7509b351bfac7c5d4f"
});

const messaging = firebase.messaging();

// 🔥 ESSENCIAL — RECEBER PUSH
self.addEventListener("push", function (event) {
  console.log("🔥 PUSH RECEBIDO:", event);

  if (!event.data) return;

  const data = event.data.json();

  const title = data.title || "Nova notificação";
  const body = data.body || "Você recebeu uma mensagem";

  const options = {
    body: body,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
    badge: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
