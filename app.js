const usuarios = [
    {
        cedula: 1001,
        contrasena: "admin",
        rol: "administrador"
    },
    {
        cedula: 1002,
        contrasena: "abc123",
        rol: "usuario"
    },
    {
        cedula: 1003,
        contrasena: "xyz789",
        rol: "usuario"
    }
]

cajero = {
    5 : 0,
    10 : 0,
    20 : 0,
    50 : 0,
    100 : 0
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
    Object.keys(cajero).forEach(billetes => {
        cajero[billetes] = parseInt(prompt(`¿Cuantos billetes de ${billetes} mil pesos va a ingresar?`))
    });
}

const reporte = () => {
    let suma = 0;
    Object.keys(cajero).forEach(billetes => {
        const totalporbillete = (billetes * 1000) * cajero[billetes]
        alert(`Hay ${totalporbillete}$ En billetes de ${billetes} Mil pesos`);
        suma += totalporbillete;
    });
    alert(`Hay en total ${suma}$ pesos`);
}

const retiro = (cantidad) => {
    Object.keys(cajero).forEach(billetes => {

    }) 
}

let cedula, contrasena, usuario;
menuAdministrador();
reporte();

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
                        menuAdministrador();
                        reporte();
                    } else {
                        alert(`${Math.trunc(46000 / 20000)}`)
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














