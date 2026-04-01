// ================================
// CONFIG BASE API
// ================================
const API_URL = "https://api-push.onrender.com";

// ================================
// ENVIO GLOBAL (FUNÇÃO GLOBAL)
// ================================
window.sendGlobal = async function (title, body) {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado. Faça login novamente.");
      return;
    }

    const res = await fetch(`${API_URL}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        titulo: title,
        mensagem: body
      })
    });

    const data = await res.json();

    console.log("🚀 Envio Global:", data);

    if (!res.ok) {
      alert("Erro ao enviar push");
      return;
    }

    return data;

  } catch (err) {
    console.error("Erro sendGlobal:", err);
    alert("Erro no envio global");
  }
};

// ================================
// ENVIO PARA USUÁRIO (FUNÇÃO GLOBAL)
// ================================
window.sendToUser = async function (userId, title, body) {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado. Faça login novamente.");
      return;
    }

    const res = await fetch(`${API_URL}/send-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        userId,
        titulo: title,
        mensagem: body
      })
    });

    const data = await res.json();

    console.log("👤 Envio Usuário:", data);

    if (!res.ok) {
      alert("Erro ao enviar para usuário");
      return;
    }

    return data;

  } catch (err) {
    console.error("Erro sendToUser:", err);
    alert("Erro no envio para usuário");
  }
};
