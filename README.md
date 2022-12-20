## Caracteristicas
- El sistema empieza cuenta con un solo usuario administrador y 3 Usuarios
Para añadir más usuarios,cada uno se tiene que registrar desde el menu principal
- Inmediatamente inicia el programa el administrador procede a recargar el cajero
- El programa solo se detendra cuando el usuario asi lo requiera

### Validaciones
- Un valor string no se puede dejar vacio
- Un valor entero no se puede dejar vacio y no puede ser menor a 0

## Login basico
### Iniciar sesion
- El usuario ingresa con su cedula
- La contraseña que ingresa tiene que coincidir con la que se registró
- Solo hay 2 roles, Administrador y usuario

### Registrarse
- Al momento de registrarse no pueden haber documentos repetidos
- Ingresa los datos basicos: documento y contraseña, se le asigna automaticamente el rol de usuario

## Funciones por rol
### Usuario
#### Retirar Dinero 
- Solo podrá retirar numeros que sean multiplos de 5000
- El cajero le dará la cantidad de dinero maxima posible en caso de que el usuario pida retirar una cantidad muy grande.
- Si el cajero está en 0$, se le notificará inmediatamente al usuario.

### Administrador
- Podrá rellenar el cajero por cada tipo de billete (5000, 10000, 20000, 50000, 100000)
- Decidirá si llenarlo con 0 o más.
