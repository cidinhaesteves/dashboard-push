// 🔥 IMPORTANTE: NÃO usar import ES6 aqui
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

// 🔐 CONFIG FIREBASE
firebase.initializeApp({
  apiKey: "AIzaSyCJzv86uRlFRAX1CBVejno1_89VD90J3OY",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:f75d7509b351bfac7c5d4f",
  measurementId: "G-G286HDQQJZ"
});

const messaging = firebase.messaging();

// ===============================
// 🔥 TRATAMENTO DO PUSH (ESSENCIAL)
// ===============================
self.addEventListener("push", function (event) {
  console.log("🔥 PUSH RECEBIDO");

  if (!event.data) {
    console.log("Sem payload");
    return;
  }

  const data = event.data.json();

  console.log("📩 Dados:", data);

  const title = data.notification?.title || "Nova mensagem";
  const body = data.notification?.body || "Você recebeu uma notificação";

  const options = {
    body: body,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
    badge: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
