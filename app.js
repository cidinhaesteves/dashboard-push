// ===============================
// 🔥 CONFIG BACKEND
// ===============================
const BASE_URL = "https://SEU-BACKEND.onrender.com";

// ===============================
// 🔐 TOKEN (LOGIN)
// ===============================
function getToken() {
  return localStorage.getItem("token");
}

// ===============================
// 🔔 GERAR TOKEN FCM
// ===============================
async function gerarToken() {
  try {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      alert("Permissão negada para notificações");
      return;
    }

    const token = await messaging.getToken({
      vapidKey: "BNK8yRqKIo8aNkr-NiLxNbZ5uXDekXEoqnxuI9y33DvMZkVvSh2-A00Sml-_s5Abcwpf5ZpGjxyC2x-z8d6D8Y8"
    });

    console.log("Token FCM:", token);

    document.getElementById("token").innerText = token;

    return token;

  } catch (error) {
    console.error("Erro ao gerar token:", error);
  }
}

// ===============================
// 💾 SALVAR TOKEN NO BACKEND
// ===============================
async function salvarToken() {
  const tokenFCM = await gerarToken();

  if (!tokenFCM) return;

  const userId = document.getElementById("userId")?.value || "";
  const group = document.getElementById("group")?.value || "";

  await fetch(`${BASE_URL}/save-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenFCM,
      userId,
      group
    })
  });

  alert("Token salvo com sucesso!");
}

// ===============================
// 🚀 ENVIO GLOBAL (PROTEGIDO)
// ===============================
async function enviarGlobal() {
  const titulo = document.getElementById("titulo").value;
  const mensagem = document.getElementById("mensagem").value;

  const token = getToken();

  if (!token) {
    alert("Você precisa estar logado!");
    return;
  }

  const res = await fetch(`${BASE_URL}/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      titulo,
      mensagem
    })
  });

  const data = await res.json();

  console.log(data);
  alert("Envio global realizado!");
}

// ===============================
// 👤 ENVIO POR USUÁRIO
// ===============================
async function enviarParaUsuario() {
  const userId = document.getElementById("userId").value;
  const titulo = document.getElementById("titulo").value;
  const mensagem = document.getElementById("mensagem").value;

  const token = getToken();

  if (!token) {
    alert("Você precisa estar logado!");
    return;
  }

  const res = await fetch(`${BASE_URL}/send-to-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      userId,
      titulo,
      mensagem
    })
  });

  const data = await res.json();

  console.log(data);
  alert("Envio para usuário realizado!");
}

// ===============================
// 👥 ENVIO POR GRUPO
// ===============================
async function enviarParaGrupo() {
  const group = document.getElementById("group").value;
  const titulo = document.getElementById("titulo").value;
  const mensagem = document.getElementById("mensagem").value;

  const token = getToken();

  if (!token) {
    alert("Você precisa estar logado!");
    return;
  }

  const res = await fetch(`${BASE_URL}/send-to-group`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      group,
      titulo,
      mensagem
    })
  });

  const data = await res.json();

  console.log(data);
  alert("Envio para grupo realizado!");
}

// ===============================
// 🔐 LOGOUT
// ===============================
function logout() {
  localStorage.removeItem("token");
  alert("Logout realizado!");
  window.location.href = "/login.html";
}
