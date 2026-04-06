// ================================
// CONFIG BASE API
// ================================
const API_URL = "https://api-push.onrender.com";

// ================================
// LOGIN
// ================================
window.login = async function () {
  try {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await res.json();

    console.log("🔐 LOGIN RESPONSE:", data);

    if (!data.token) {
      alert("Erro no login!");
      return;
    }

    localStorage.setItem("token", data.token);

    alert("Login realizado com sucesso!");
    window.location.href = "dashboard.html";

  } catch (err) {
    console.error("Erro no login:", err);
  }
};

// ================================
// CHECK AUTH
// ================================
window.checkAuth = function () {
  const token = localStorage.getItem("token");

  console.log("🔎 TOKEN NO DASHBOARD:", token);

  if (!token) {
    alert("Faça login primeiro");
    window.location.href = "login.html";
  }
};

// ================================
// ENVIO GLOBAL (CORRIGIDO)
// ================================
window.sendGlobal = async function () {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado");
      return;
    }

    // 🔥 IDs CORRETOS DO HTML
    const title = document.getElementById("globalTitle").value;
    const body = document.getElementById("globalBody").value;

    const res = await fetch(`${API_URL}/send-global`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ title, body })
    });

    const data = await res.json();

    console.log("🚀 Envio Global:", data);

    alert("Enviado global!");

  } catch (err) {
    console.error("Erro sendGlobal:", err);
  }
};

// ================================
// ENVIO POR EMAIL
// ================================
window.sendToUser = async function () {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado");
      return;
    }

    const email = document.getElementById("emailUser").value;
    const title = document.getElementById("titleUser").value;
    const body = document.getElementById("bodyUser").value;

    const res = await fetch(`${API_URL}/send-to-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ email, title, body })
    });

    const data = await res.json();

    console.log("👤 Envio Usuário:", data);

    alert("Enviado para usuário!");

  } catch (err) {
    console.error("Erro sendToUser:", err);
  }
};
