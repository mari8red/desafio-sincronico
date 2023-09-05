
url = "https://jsonplaceholder.typicode.com/users";


document.addEventListener("DOMContentLoaded", () => {
    
    const userName = document.getElementById("name");
    const surname = document.getElementById("surname");
    const birthDate = document.getElementById("birthDate");
    const form = document.getElementById("form");
    const btnEnviar = document.getElementById("btnEnviar");

    form.addEventListener("submit", (e) => {

        e.preventDefault(); // Para evitar el envío predeterminado del formulario

        const userData = {
            name: userName.value,
            surname: surname.value,
            birthDate: birthDate.value,
        } // Datos que deben tranformarse de string a JSON

        const options = {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userData),
        };

        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error("error fetching data", error));
    }); // Solicitud HTTP utilizando fetch() con el método POST.
});
