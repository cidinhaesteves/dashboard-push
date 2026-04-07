import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// 🔥 CONFIG FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCNQ5SPMtnAbPvC11kYv-t2xEDoc8QuR8A",
  authDomain: "eco-goias.firebaseapp.com",
  projectId: "eco-goias",
  storageBucket: "eco-goias.firebasestorage.app",
  messagingSenderId: "31870091742",
  appId: "1:31870091742:web:2ea58294b93441b47c5d4f"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// 🔥 SUA VAPID KEY (EXATAMENTE DO FIREBASE)
const VAPID_KEY = "BNKbYRqKlo8aNkr-NiLxNbZ5uXDEkXEogxnUfy33DVmzKVvSh2-AO0Sml-S5Abcwpf5ZpGjxcy2x-3d6dD9Y8";

// 🔥 CONVERSÃO CORRETA (ESSENCIAL)
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// 🔥 FUNÇÃO PRINCIPAL
export async function gerarToken() {
  try {
    console.log("🚀 INICIANDO...");

    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      throw new Error("Permissão negada");
    }

    console.log("✅ PERMISSÃO OK");

    const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
    console.log("✅ SW REGISTRADO");

    await navigator.serviceWorker.ready;
    console.log("✅ SW PRONTO");

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration
    });

    if (!token) {
      throw new Error("Token não gerado");
    }

    console.log("🔥 TOKEN GERADO:", token);

    return token;

  } catch (error) {
    console.error("❌ ERRO REAL:", error);
    throw error;
  }
}
