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

// 🔥 CORRETO PARA FIREBASE
messaging.onBackgroundMessage(function (payload) {
  console.log("🔥 BACKGROUND MESSAGE:", payload);

  const title = payload.data?.title || "Nova notificação";
  const body = payload.data?.body || "Mensagem recebida";

  self.registration.showNotification(title, {
    body: body,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
  });
});
