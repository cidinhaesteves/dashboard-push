// ================================
// CONFIG API
// ================================
const API_BASE = "https://api-push.onrender.com";

// ================================
// REQUEST BASE (100% BLINDADO)
// ================================
async function apiRequest(endpoint, data = {}) {
  try {
    const res = await fetch(API_BASE + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    let result = null;
    let text = "";

    try {
      text = await res.text();
      console.log("RESPOSTA RAW:", text);

      if (text && text.trim().startsWith("{")) {
        result = JSON.parse(text);
      } else {
        result = { message: text };
      }

    } catch (e) {
      console.warn("Erro ao parsear resposta:", e);
      result = { message: text };
    }

    if (!res.ok) {
      throw new Error(
        (result && result.error) ||
        (result && result.message) ||
        "Erro na API"
      );
    }

    return result;

  } catch (err) {
    console.error("Erro API:", err);
    alert("Erro: " + (err.message || "Erro desconhecido"));
  }
}

// ================================
// FUNÇÕES DE ENVIO
// ================================
async function sendGlobal(title, body) {
  return await apiRequest("/send", { title, body });
}

async function sendToUser(userId, title, body) {
  return await apiRequest("/send-to-user", { userId, title, body });
}

async function sendToGroup(groupName, title, body) {
  return await apiRequest("/send-to-group", { groupName, title, body });
}

// ================================
// FUNÇÕES DE GRUPO
// ================================
async function createGroup(name) {
  return await apiRequest("/create-group", { name });
}

async function addUserToGroup(groupName, userId) {
  return await apiRequest("/add-user-to-group", { groupName, userId });
}
