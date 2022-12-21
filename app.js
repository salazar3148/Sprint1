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

const cajero = {
    100000: 0,
    50000: 0,
    20000: 0,
    10000: 0,
    5000: 0
}

let TotalCajero;

const validarString = (mensaje) => {
    let str;
    do str = prompt(mensaje);
    while (str === "");
    return str;
}

const validarEntero = (mensaje) => {
    let integer;
    do integer = parseInt(prompt(mensaje));
    while (integer < 0 || isNaN(integer));
    return integer;
}

const login = () => "1. Iniciar Sesión\n" +
    "2. Registrarse\n" +
    "3. Salir\n" +
    "-> Ingrese una opción";

const buscarUsuario = (cedula) => usuarios.find((usuario) => usuario.cedula == cedula);

const registrarse = (cedula, contrasena) => {
    usuarios.push({
        cedula: cedula,
        contrasena: contrasena,
        rol: "usuario"
    });
}

const menuAdministrador = () => {
    Object.keys(cajero).forEach(billetes => {
        cajero[billetes] += validarEntero(`¿Cuantos billetes de ${billetes}$ pesos va a ingresar?`)
    });
}

const reporte = () => {
    TotalCajero = 0;
    let mensaje = "";
    Object.keys(cajero).forEach(billetes => {
        const totalporbillete = (billetes) * cajero[billetes]
        mensaje += `Hay ${totalporbillete}$ En billetes de ${billetes}$ pesos\n`;
        TotalCajero += totalporbillete;
    });
    alert(mensaje);
    alert(`Hay en total ${TotalCajero}$ pesos`);
}

const retiro = (cantidad) => {
    let maximoARetirar = 0;
    let mensaje = "";
    Object.keys(cajero).reverse().forEach(billetes => {
        const cantBilletes = cajero[billetes];
        const divEntera = Math.trunc(cantidad / billetes);
        const billetesAUsar = divEntera > cantBilletes ? cantBilletes : divEntera;
        const total = billetesAUsar * billetes;

        if (cantidad >= billetes && cantBilletes > 0) {
            mensaje += `Se le dió ${billetesAUsar} billete(s) de ${billetes}$ pesos.\n`
            cajero[billetes] -= billetesAUsar;
            cantidad -= total;
            maximoARetirar += total;
        }
    })
    console.log(mensaje);
    alert(mensaje)
    return maximoARetirar;
}

let cedula, contrasena, usuario;
let parar = false;
menuAdministrador();
reporte();

while (!parar) {
    const opc = validarString(login());
    switch (opc) {
        case '1':
            cedula = validarEntero("Ingrese la cedula: ");
            usuario = buscarUsuario(cedula);
            if (!usuario) {
                alert("No hay un usuario registrado con esa cedula");
                break;
            }
            contrasena = validarString("Ingrese su contraseña: ");
            if (contrasena !== usuario.contrasena) {
                alert("Contraseña incorrecta!");
                break;
            }
            if (usuario.rol === 'administrador') {
                menuAdministrador();
                reporte();
                break;
            }
            if (!(TotalCajero > 0)) {
                alert("El cajero está en mantenimiento")
                break;
            }
            const cantidad = validarEntero("¿Cuánto quiere retirar?");
            const total = retiro(cantidad);
            cantidad == total ? alert(`Usted retiró exactamente ${cantidad}`) :
                alert(`El cajero solo le pudó dar ${total}`)
            reporte();
            break;
        case '2':
            cedula = validarEntero("Ingrese su cedula: ");
            usuario = buscarUsuario(cedula);
            if (usuario) alert("Su cedula ya está registrada");
            else {
                contrasena = validarString("Ingrese su contraseña nueva: ");
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
