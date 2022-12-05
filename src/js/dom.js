const content = document.querySelector(".content");

// Creacion del formulario
const form = document.createElement("form");
const btn = document.createElement("button");
// btn.type = "button";
btn.textContent = "¡Click Me!"

form.appendChild(btn);
content.append(form)

