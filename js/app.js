const listaSpesa = [`pane`, `pasta`, `farina`, `sale`, `zucchero`];
const list = document.querySelector(`.lista-spesa`);
let i = 0;

for (i = 0; i < listaSpesa.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = listaSpesa[i];
  list.appendChild(li);
}

i = 0;
while (i < listaSpesa.length) {
  const li = document.createElement("li");
  li.innerHTML = listaSpesa[i];
  list.appendChild(li);
  i++;
}
