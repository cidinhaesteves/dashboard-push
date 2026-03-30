self.addEventListener("push", function (event) {
  console.log("🔥 PUSH RECEBIDO");

  if (!event.data) {
    console.log("❌ Sem dados");
    return;
  }

  let data = {};

  try {
    data = event.data.json();
  } catch (e) {
    console.log("❌ Erro ao ler JSON");
    return;
  }

  console.log("📩 DATA COMPLETA:", data);

  // 🔥 CORREÇÃO AQUI
  const title = data.data?.title || "Nova mensagem";
  const body = data.data?.body || "Você tem uma notificação";

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
    })
  );
});
