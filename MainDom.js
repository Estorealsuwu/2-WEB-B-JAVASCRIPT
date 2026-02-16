const titulo = document.getElementById("titulo");

const texto = document.querySelector("texto");

const caja = document.querySelector(".caja");

const btnTexto = document.getElementById("btnTexto");
const btnColor = document.getElementById("btnColor");
const btnOcultar = document.getElementById("btnOcultar");
const btn = document.getElementById("btn");

//cambiar texto
btnTexto.addEventListener("click",()=>{
    titulo.textContent = "El texto ha sido cambiado";
});
//cambiar color
btnColor.addEventListener("click",()=>{
    titulo.style.color = "purple";
    caja.style.backgroundColor = "pink";
});
//ocultar/mostrar
btnOcultar.addEventListener("click",()=>{
    if(caja.style.display === "none"){
        caja.style.display = "block";
    }
    else{
        caja.style.display = "none";
    }
});
//canbiar clase
btn.addEventListener("click",()=>{
    caja.classList.toggle("activa");
})

//crear caja de comentarios interactiva
const form = document.querySelector("#formulario");
const input = document.querySelector("#inputComentario");
const contenedor = document.querySelector("#contenedorComentarios");

// 2. Escuchar el evento submit
form.addEventListener("submit", (e) => {

    // 3. Prevenir recarga
    e.preventDefault();

    // 4. Capturar el texto
    const texto = input.value;

    // Validación simple
    if (texto.trim() === "") return;

    // 5. Crear elemento <p>
    const comentario = document.createElement("p");
    // 6. Asignar contenido
    comentario.textContent = texto;

    // 7. Agregar al DOM
    contenedor.appendChild(comentario);

    // Limpiar input
    input.value = "";
});