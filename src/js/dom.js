const content = document.querySelector(".content");

// Creacion del formulario
const form = document.createElement("form");
const btn = document.createElement("button");
btn.textContent = "¡Click Me!"
const CodeColor = document.createElement('span');
CodeColor.className = 'span'
form.append(btn, CodeColor );
content.append(form)
 

