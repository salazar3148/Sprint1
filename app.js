const usuarios = [
    {
        cedula: 1001750725,
        contrasena: "admin",
        rol: "administrador"
    }
]

let parar = false;

const menu = () => "1. Iniciar Sesión\n" +
                   "2. Registrarse\n" +
                   "3. Salir\n" +
                   "-> Ingrese una opción";

const buscarUsuario = (cedula) => usuarios.find((usuario) => usuario.cedula == cedula);
 
const registrarse = (cedula, contrasena) => {
    usuarios.push({
        cedula: cedula,
        contrasena: contrasena,
        rol:"usuario"
    });
}

let cedula, contrasena, usuario;
while(!parar){

    const opc = prompt(menu());
    switch(opc){
        case '1':
            cedula = parseInt(prompt("Ingrese la cedula: "));
            usuario = buscarUsuario(cedula);
            if(usuario){
                contrasena = prompt("Ingrese su contraseña: ");
                if(contrasena === usuario.contrasena){
                    
                    //logic here

                }else alert("Contraseña incorrecta!");
            }else alert("No hay un usuario registrado con esa cedula");
            break;
        case '2':
            cedula = parseInt(prompt("Ingrese su cedula: "));
            usuario = buscarUsuario(cedula);
            if(usuario) alert("Su cedula ya está registrada");
            else {
                contrasena = prompt("Ingrese su contraseña nueva: ");
                registrarse(cedula, contrasena);
                alert("Usuario registrado con exito!");
                alert(usuarios);
            }
            break;
        case '3':
            parar = true;
            alert("Adios...");
            break;
        default:
            alert("Elija una opción correcta por favor!")
    }
}














