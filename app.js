const API_URL = "https://api-push.onrender.com";

const tituloInput = document.getElementById("titulo");
const mensagemInput = document.getElementById("mensagem");

const contTitulo = document.getElementById("contTitulo");
const contMensagem = document.getElementById("contMensagem");

const previewTitulo = document.getElementById("previewTitulo");
const previewMensagem = document.getElementById("previewMensagem");

const btnEnviar = document.getElementById("btnEnviar");
const status = document.getElementById("status");

// ==============================
// 🔥 UI (CONTADOR + PREVIEW)
// ==============================
function atualizarUI() {
  const titulo = tituloInput.value;
  const mensagem = mensagemInput.value;

  contTitulo.innerText = `${titulo.length} / 30`;
  contMensagem.innerText = `${mensagem.length} / 120`;

  previewTitulo.innerText = titulo.length > 30
    ? titulo.substring(0, 30) + "..."
    : titulo || "Título";

  previewMensagem.innerText = mensagem || "Mensagem...";
}

tituloInput.addEventListener("input", atualizarUI);
mensagemInput.addEventListener("input", atualizarUI);

// ==============================
// 🚀 ENVIO PUSH (SEM LOGIN)
// ==============================
btnEnviar.addEventListener("click", async () => {
  const title = tituloInput.value;
  const body = mensagemInput.value;

  if (!title || !body) {
    status.innerHTML = "⚠️ Preencha título e mensagem";
    return;
  }

  try {
    status.innerHTML = "⏳ Enviando...";

    const res = await fetch(`${API_URL}/send-push`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        body,
        segment: "all"
      })
    });

    const data = await res.json();

    if (data.success) {
      status.innerHTML = `✅ Enviado: ${data.sent} dispositivos`;

      // LIMPAR CAMPOS
      tituloInput.value = "";
      mensagemInput.value = "";

      atualizarUI();
    } else {
      status.innerHTML = "❌ Falha no envio";
    }

  } catch (error) {
    console.error(error);
    status.innerHTML = "❌ Erro ao conectar com servidor";
  }
});

// ==============================
// INIT
// ==============================
atualizarUI();