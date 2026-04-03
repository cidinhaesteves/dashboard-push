// ================================
// CONFIG BASE API
// ================================
const API_URL = "https://api-push.onrender.com";

// ================================
// ENVIO GLOBAL
// ================================
window.sendGlobal = async function (title, body) {
  try {
    const token = localStorage.getItem("token");

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

  } catch (err) {
    console.error("Erro sendGlobal:", err);
  }
};

// ================================
// ENVIO POR EMAIL
// ================================
window.sendToUser = async function (email, title, body) {
  try {
    const token = localStorage.getItem("token");

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

  } catch (err) {
    console.error("Erro sendToUser:", err);
  }
};
