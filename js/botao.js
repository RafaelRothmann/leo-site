function moverBotao() {
  const btn = document.getElementById("naoBtn");
  
  btn.style.position = "absolute";

  const largura = window.innerWidth - btn.offsetWidth;
  const altura = window.innerHeight - btn.offsetHeight;
  const novaPosX = Math.floor(Math.random() * largura);
  const novaPosY = Math.floor(Math.random() * altura);
  
  btn.style.left = novaPosX + "px";
  btn.style.top = novaPosY + "px";
}

function responderSim() {
  window.location.href = "sim.html";
}
