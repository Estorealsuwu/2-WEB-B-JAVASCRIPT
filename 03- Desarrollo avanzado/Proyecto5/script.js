const formulario = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value;

    const intereses = document.querySelectorAll(
        'input[name="intereses"]:checked'
    );

    const horario = document.querySelector(
        'input[name="horario"]:checked'
    );

    mensaje.style.color = "red";

    // Validación 1
    if (nombre.length < 3) {
        mensaje.textContent =
            "El nombre debe tener al menos 3 caracteres.";
        return;
    }

    // Validación 2
    const correoValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoValido.test(correo)) {
        mensaje.textContent =
            "Ingresa un correo electrónico válido.";
        return;
    }

    // Validación 3
    const telefonoValido =
        /^[0-9]{10}$/;

    if (!telefonoValido.test(telefono)) {
        mensaje.textContent =
            "El teléfono debe contener 10 números.";
        return;
    }

    // Validación 4
    if (intereses.length === 0) {
        mensaje.textContent =
            "Selecciona al menos un interés.";
        return;
    }

    // Validación 5
    if (!horario) {
        mensaje.textContent =
            "Selecciona un horario.";
        return;
    }

    // Validación 6
    if (fecha === "") {
        mensaje.textContent =
            "Selecciona una fecha.";
        return;
    }

    // Validación extra:
    // La fecha no puede ser anterior al día actual

    const fechaActual = new Date();
    const fechaEvento = new Date(fecha);

    fechaActual.setHours(0,0,0,0);

    if (fechaEvento < fechaActual) {
        mensaje.textContent =
            "La fecha no puede ser anterior a hoy.";
        return;
    }

    mensaje.style.color = "green";
    mensaje.textContent =
        "Registro enviado correctamente.";

    formulario.reset();
});