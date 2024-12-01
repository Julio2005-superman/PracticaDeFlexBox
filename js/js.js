document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe automáticamente

    // Recoger los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || usuario === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        // Enviar los datos a un servidor o simplemente mostrarlos en la consola
        console.log("Nombre:", nombre);
        console.log("Usuario:", usuario);
        console.log("Password:", password);

        // Aquí puedes agregar el código para enviar los datos a un servidor usando fetch o AJAX
        alert("Datos enviados correctamente.");
    }
});
