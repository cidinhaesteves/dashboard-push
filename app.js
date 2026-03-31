// ================================
// CONFIG API (CENTRAL)
// ================================
const API_BASE = "https://api-push.onrender.com";

// ================================
// FUNÇÃO BASE FETCH (CORRIGIDA)
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

```
let result = {};

try {
  result = await res.json();
} catch (e) {
  console.warn("Resposta não é JSON");
}

if (!res.ok) {
  throw new Error(result.error || "Erro na API");
}

return result;
```

} catch (err) {
console.error("Erro API:", err);
alert("Erro: " + err.message);
}
}

// ================================
// PUSH GLOBAL
// ================================
async function sendGlobal(title, body) {
return apiRequest("/send", { title, body });
}

// ================================
// PUSH USUÁRIO
// ================================
async function sendToUser(userId, title, body) {
return apiRequest("/send-to-user", { userId, title, body });
}

// ================================
// PUSH GRUPO
// ================================
async function sendToGroup(groupName, title, body) {
return apiRequest("/send-to-group", { groupName, title, body });
}

// ================================
// CRIAR GRUPO
// ================================
async function createGroup(name) {
return apiRequest("/create-group", { name });
}

// ================================
// ADD USER AO GRUPO
// ================================
async function addUserToGroup(groupName, userId) {
return apiRequest("/add-user-to-group", { groupName, userId });
}

// ================================
// REGISTER USER (EXTRA FUTURO)
// ================================
async function registerUser(userId, token) {
return apiRequest("/register-user", { userId, token });
}
