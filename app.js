const usuarios = [
    {
        //cedula: 1001750725,
        cedula: 1,
        contrasena: "admin",
        rol: "administrador"
    }
]

cajero = {
    b5 : 0,
    b10 : 0,
    b20 : 0,
    b50 : 0,
    b100 : 0
}

let parar = false;

const login = () => "1. Iniciar Sesión\n" +
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

const menuAdministrador = () => {
    let index = 0; 
    const nombres = [5, 10, 20, 50, 100];
    Object.keys(cajero).forEach(billetes => {
        cajero[billetes] = parseInt(prompt(`¿Cuantos billetes de ${nombres[index++]} mil pesos va a ingresar?`))
    });
}

let cedula, contrasena, usuario;
while(!parar){

    const opc = prompt(login());
    switch(opc){
        case '1':
            cedula = parseInt(prompt("Ingrese la cedula: "));
            usuario = buscarUsuario(cedula);
            if(usuario){
                contrasena = prompt("Ingrese su contraseña: ");
                if(contrasena === usuario.contrasena){
                    
                    if(usuario.rol === 'administrador'){
                        menuAdministrador();

                    }

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














