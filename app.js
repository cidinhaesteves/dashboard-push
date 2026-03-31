// ================================
// CONFIG API
// ================================
const API_BASE = "https://api-push.onrender.com";

// ================================
// REQUEST BASE (100% SEGURO)
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
let result = null;

try {
  const text = await res.text();
  result = text ? JSON.parse(text) : null;
} catch (e) {
  console.warn("Resposta não é JSON");
}

if (!res.ok) {
  throw new Error((result && result.error) || "Erro na API");
}

return result;
```

} catch (err) {
console.error("Erro API:", err);
alert("Erro: " + err.message);
}
}

// ================================
// FUNÇÕES
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

async function createGroup(name) {
return await apiRequest("/create-group", { name });
}

async function addUserToGroup(groupName, userId) {
return await apiRequest("/add-user-to-group", { groupName, userId });
}
