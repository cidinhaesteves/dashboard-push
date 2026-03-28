importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
apiKey: "AIzaSyCN05SpMfHAbPyCl1kYy-t2xFDoc8QuR8A",
authDomain: "eco-goias.firebaseapp.com",
projectId: "eco-goias",
storageBucket: "eco-goias.firebasestorage.app",
messagingSenderId: "31870091742",
appId: "1:31870091742:web:2ea58294b93441b47c5d4f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
console.log("📩 PUSH RECEBIDO:", payload);

self.registration.showNotification(payload.notification.title, {
body: payload.notification.body,
icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
});
});
