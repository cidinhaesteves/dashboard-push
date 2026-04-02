// ================================
// CONFIG BASE API
// ================================
const API_URL = "https://api-push.onrender.com";

// ================================
// ENVIO GLOBAL (ALINHADO COM BACKEND)
// ================================
window.sendGlobal = async function (title, body) {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado. Faça login novamente.");
      return;
    }

    const res = await fetch(`${API_URL}/send-global`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        title,
        body
      })
    });

    const data = await res.json();

    console.log("🚀 Envio Global:", data);

    if (!res.ok) {
      alert(data.error || "Erro ao enviar push global");
      return;
    }

    return data;

  } catch (err) {
    console.error("Erro sendGlobal:", err);
    alert("Erro no envio global");
  }
};

// ================================
// ENVIO PARA USUÁRIO POR EMAIL (NÍVEL 2)
// ================================
window.sendToUser = async function (email, title, body) {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado. Faça login novamente.");
      return;
    }

    const res = await fetch(`${API_URL}/send-to-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        email,
        title,
        body
      })
    });

    const data = await res.json();

    console.log("👤 Envio Usuário:", data);

    if (!res.ok) {
      alert(data.error || "Erro ao enviar para usuário");
      return;
    }

    return data;

  } catch (err) {
    console.error("Erro sendToUser:", err);
    alert("Erro no envio para usuário");
  }
};
