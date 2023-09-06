const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault(); //Evitar que se recargue la pagina

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Objeto con los datos del formulario
    const datosFormulario = {
        nombre,
        apellido,
        fechaNacimiento
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Éxito:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
