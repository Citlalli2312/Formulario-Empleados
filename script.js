document.getElementById("employeeForm").addEventListener("submit", function(event){
    event.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let position = document.getElementById("position").value;
    
    document.getElementById("output").innerHTML= `
        <h3>Empleado Registrado</h3>
        <p><strong><Nombre:</strong> ${name}</p>
        <p><strong><Correo:</strong> ${email}</p>
        <p><strong><Puesto:</strong> ${position}</p>
    `;
    document.getElementById("employeeForm").requestFullscreen();
});