const listaSpesa = [`pane`, `pasta`, `farina`, `sale`, `zucchero`];
const list = document.querySelector(`.lista-spesa`);

for (let i = 0; i < listaSpesa.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = listaSpesa[i];
  list.appendChild(li);
}
