const questionsData = [
    {
        question: "¿Qué etiqueta HTML se usa para insertar JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        correct: "<script>"
    },
    {
        question: "¿Cuál de los siguientes es un sistema operativo de código abierto?",
        options: ["Windows", "Linux", "macOS", "iOS"],
        correct: "Linux"
    },
    {
        question: "¿Qué significa CSS en desarrollo web?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheet"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "¿Cuál de los siguientes protocolos se usa de forma segura para transferir páginas web?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correct: "HTTPS"
    },
    {
        question: "¿Qué lenguaje se utiliza principalmente para dar estilos y diseño a una página web?",
        options: ["HTML", "CSS", "Python", "SQL"],
        correct: "CSS"
    },
    {
        question: "¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?",
        options: ["Cola (Queue)", "Pila (Stack)", "Árbol (Tree)", "Grafo (Graph)"],
        correct: "Pila (Stack)"
    },
    {
        question: "¿Cuál es el puerto por defecto utilizado por el protocolo HTTP?",
        options: ["21", "25", "80", "443"],
        correct: "80"
    },
    {
        question: "¿Qué significa la sigla SQL?",
        options: ["Structured Query Language", "Simple Question Language", "System Quality Link", "Standard Query Logic"],
        correct: "Structured Query Language"
    },
    {
        question: "¿Cuál de los siguientes no es un lenguaje de programación?",
        options: ["Python", "Java", "HTML", "C++"],
        correct: "HTML"
    },
    {
        question: "¿Qué componente de la computadora se encarga de ejecutar las instrucciones y procesar los datos?",
        options: ["Memoria RAM", "Disco Duro", "CPU", "Fuente de Poder"],
        correct: "CPU"
    },
    {
        question: "¿Qué tipo de base de datos organiza la información en tablas con filas y columnas?",
        options: ["NoSQL", "Relacional", "Jerárquica", "Orientada a objetos"],
        correct: "Relacional"
    },
    {
        question: "¿Cuál es el sistema de control de versiones creado por Linus Torvalds?",
        options: ["SVN", "Mercurial", "Git", "CVS"],
        correct: "Git"
    },
    {
        question: "¿Qué significa la sigla URL?",
        options: ["Uniform Resource Locator", "Universal Radio Link", "Unified Record Language", "Utility Remote Log"],
        correct: "Uniform Resource Locator"
    },
    {
        question: "¿Qué etiqueta HTML se utiliza para crear un enlace o hipervínculo?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: "<a>"
    },
    {
        question: "¿Cuál de los siguientes comandos de Linux se usa para listar archivos y directorios?",
        options: ["cd", "ls", "pwd", "mkdir"],
        correct: "ls"
    },
    {
        question: "¿Qué significa la sigla RAM en informática?",
        options: ["Read Access Memory", "Random Access Memory", "Rapid Active Module", "Run Application Machine"],
        correct: "Random Access Memory"
    },
    {
        question: "¿Cuál es el protocolo de red utilizado para enviar correos electrónicos?",
        options: ["POP3", "IMAP", "SMTP", "SNMP"],
        correct: "SMTP"
    },
    {
        question: "¿Qué lenguaje de programación se ejecuta principalmente en el lado del cliente (navegador web)?",
        options: ["PHP", "Python", "JavaScript", "C#"],
        correct: "JavaScript"
    },
    {
        question: "¿Qué extensión tienen comúnmente los archivos de hojas de estilo en cascada?",
        options: [".html", ".js", ".css", ".json"],
        correct: ".css"
    },
    {
        question: "¿Cuál de los siguientes es un framework de JavaScript para desarrollo frontend?",
        options: ["Django", "React", "Flask", "Laravel"],
        correct: "React"
    },
    {
        question: "¿Qué significa la sigla API?",
        options: ["Application Programming Interface", "Advanced Program Integration", "Automated Protocol Interaction", "Application Process Integration"],
        correct: "Application Programming Interface"
    },
    {
        question: "¿Qué etiqueta HTML se usa para mostrar la imagen más grande o principal de cabecera?",
        options: ["<image>", "<img>", "<src>", "<pic>"],
        correct: "<img>"
    },
    {
        question: "¿Cuál es el comando en Git para descargar una copia de un repositorio remoto?",
        options: ["git push", "git commit", "git clone", "git init"],
        correct: "git clone"
    },
    {
        question: "¿Qué tipo de memoria es volátil y pierde su información al apagar el equipo?",
        options: ["Disco SSD", "Memoria ROM", "Memoria RAM", "Memoria Flash"],
        correct: "Memoria RAM"
    },
    {
        question: "¿Qué significa la sigla DNS en redes informáticas?",
        options: ["Domain Name System", "Digital Network Service", "Data Node Security", "Direct Name Server"],
        correct: "Domain Name System"
    },
    {
        question: "¿Cuál de los siguientes gestores de bases de datos es de código abierto?",
        options: ["Oracle Database", "Microsoft SQL Server", "PostgreSQL", "DB2"],
        correct: "PostgreSQL"
    },
    {
        question: "¿Qué propiedad de CSS se usa para cambiar el color del texto?",
        options: ["text-color", "font-color", "color", "background-color"],
        correct: "color"
    },
    {
        question: "¿Cuál es la función principal de un firewall (cortafuegos)?",
        options: ["Acelerar el internet", "Filtrar el tráfico de red y bloquear accesos no autorizados", "Reparar virus automáticamente", "Amplificar la señal Wi-Fi"],
        correct: "Filtrar el tráfico de red y bloquear accesos no autorizados"
    },
    {
        question: "¿Qué significa la sigla JSON?",
        options: ["Java Script Object Notation", "Java Source Open Native", "Junction System Output Network", "JavaScript Online Node"],
        correct: "Java Script Object Notation"
    },
    {
        question: "¿Qué comando de Linux se utiliza para crear un nuevo directorio?",
        options: ["rmdir", "touch", "mkdir", "cat"],
        correct: "mkdir"
    },
    {
        question: "¿Cuál de los siguientes puertos corresponde por defecto al protocolo HTTPS?",
        options: ["80", "443", "22", "21"],
        correct: "443"
    },
    {
        question: "¿Qué significa la sigla IP en redes?",
        options: ["Internal Program", "Internet Protocol", "Information Packet", "Interconnection Port"],
        correct: "Internet Protocol"
    },
    {
        question: "¿Cuál de los siguientes lenguajes está orientado principalmente al desarrollo de inteligencia artificial y ciencia de datos?",
        options: ["Python", "HTML", "CSS", "Assembly"],
        correct: "Python"
    },
    {
        question: "¿Qué etiqueta HTML se utiliza para crear una lista desordenada (con viñetas)?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correct: "<ul>"
    },
    {
        question: "¿Qué significa la sigla SSD en almacenamiento?",
        options: ["Solid State Drive", "Super Speed Disk", "System Storage Device", "Safe Serial Data"],
        correct: "Solid State Drive"
    },
    {
        question: "¿Cuál es el propósito del comando 'git commit'?",
        options: ["Subir cambios a GitHub", "Guardar una confirmación de los cambios en el historial local", "Descargar el repositorio", "Crear una nueva rama"],
        correct: "Guardar una confirmación de los cambios en el historial local"
    },
    {
        question: "¿Qué estructura de datos almacena elementos en pares de clave-valor?",
        options: ["Array", "Diccionario / Objeto", "Cola", "Pila"],
        correct: "Diccionario / Objeto"
    },
    {
        question: "¿Qué significa la sigla UI en diseño y desarrollo?",
        options: ["User Interaction", "User Interface", "Unified Integration", "Universal Internet"],
        correct: "User Interface"
    },
    {
        question: "¿Cuál de los siguientes es un sistema operativo móvil desarrollado por Google?",
        options: ["iOS", "Windows Phone", "Android", "Symbian"],
        correct: "Android"
    },
    {
        question: "¿Qué comando de Linux permite ver el contenido de un archivo directamente en la terminal?",
        options: ["cat", "ls", "pwd", "cp"],
        correct: "cat"
    },
    {
        question: "¿Qué etiqueta HTML se utiliza para definir una tabla?",
        options: ["<tab>", "<table>", "<tb>", "<grid>"],
        correct: "<table>"
    },
    {
        question: "¿Cuál es el protocolo seguro para la gestión remota de servidores mediante terminal?",
        options: ["Telnet", "SSH", "FTP", "HTTP"],
        correct: "SSH"
    },
    {
        question: "¿Qué significa la sigla UX en el desarrollo de software?",
        options: ["User Experience", "Universal XML", "User Execution", "Unidad X"],
        correct: "User Experience"
    },
    {
        question: "¿Cuál de los siguientes operadores en JavaScript se utiliza para comparación estricta (valor y tipo)?",
        options: ["==", "=", "===", "!="],
        correct: "==="
    },
    {
        question: "¿Qué función cumple el comando 'git push'?",
        options: ["Descargar actualizaciones", "Enviar los commits locales al repositorio remoto", "Inicializar Git", "Borrar archivos"],
        correct: "Enviar los commits locales al repositorio remoto"
    },
    {
        question: "¿Qué significa la sigla BIOS en una computadora?",
        options: ["Basic Input/Output System", "Binary Internal Operating Source", "Built-in Integrated Option Setup", "Base Information Online Service"],
        correct: "Basic Input/Output System"
    },
    {
        question: "¿Cuál de los siguientes elementos es un selector de clase en CSS?",
        options: ["#mi-id", ".mi-clase", "etiqueta", "*"],
        correct: ".mi-clase"
    },
    {
        question: "¿Qué es un algoritmo en informática?",
        options: ["Un virus informático", "Una secuencia de pasos lógicos y finitos para resolver un problema", "Un tipo de memoria", "Un cable de red"],
        correct: "Una secuencia de pasos lógicos y finitos para resolver un problema"
    },
    {
        question: "¿Qué significa la sigla PDF?",
        options: ["Portable Document Format", "Printed Data File", "Public Digital Folder", "Program Definition Format"],
        correct: "Portable Document Format"
    },
    {
        question: "¿Cuál de los siguientes puertos utiliza por defecto el protocolo SSH?",
        options: ["21", "22", "80", "443"],
        correct: "22"
    },
    {
        question: "¿Qué etiqueta HTML se utiliza para insertar una línea divisoria horizontal?",
        options: ["<br>", "<hr>", "<line>", "<divider>"],
        correct: "<hr>"
    },
    {
        question: "¿Qué significa la sigla IoT?",
        options: ["Internet of Things", "Input of Technology", "Index of Templates", "Internal Operation Terminal"],
        correct: "Internet of Things"
    },
    {
        question: "¿Cuál de los siguientes comandos de Linux se utiliza para cambiar de directorio?",
        options: ["ls", "pwd", "cd", "mv"],
        correct: "cd"
    },
    {
        question: "¿Qué es el código fuente de un programa?",
        options: ["El instructivo impreso en papel", "Las líneas de código escritas por un programador en un lenguaje comprensible", "El archivo ejecutable final", "La memoria caché"],
        correct: "Las líneas de código escritas por un programador en un lenguaje comprensible"
    },
    {
        question: "¿Qué significa la sigla CPU?",
        options: ["Central Processing Unit", "Control Program Utility", "Computer Personal Unit", "Core Processing Utility"],
        correct: "Central Processing Unit"
    },
    {
        question: "¿Cuál de los siguientes es un sistema de gestión de bases de datos NoSQL?",
        options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
        correct: "MongoDB"
    },
    {
        question: "¿Qué etiqueta HTML se usa para los campos de entrada de datos del usuario (formularios)?",
        options: ["<input>", "<form-field>", "<text>", "<button>"],
        correct: "<input>"
    },
    {
        question: "¿Qué significa la sigla FTP?",
        options: ["File Transfer Protocol", "Fast Text Process", "Folder Transmission Program", "File Text Port"],
        correct: "File Transfer Protocol"
    },
    {
        question: "¿Cuál es el propósito principal de una sentencia condicional 'if' en programación?",
        options: ["Repetir un bloque de código", "Tomar decisiones basadas en si se cumple o no una condición", "Definir variables globales", "Cerrar la aplicación"],
        correct: "Tomar decisiones basadas en si se cumple o no una condición"
    },
    {
        question: "¿Qué significa la sigla IDE en desarrollo de software?",
        options: ["Integrated Development Environment", "Internal Design Engine", "Interactive Data Editor", "Internet Direct Execution"],
        correct: "Integrated Development Environment"
    },
    {
        question: "¿Cuál de los siguientes elementos es un selector de ID en CSS?",
        options: [".mi-clase", "#mi-id", "div", "span"],
        correct: "#mi-id"
    },
    {
        question: "¿Qué comando de Linux muestra la ruta del directorio actual en el que te encuentras?",
        options: ["ls", "cd", "pwd", "whoami"],
        correct: "pwd"
    },
    {
        question: "¿Qué significa la sigla SaaS?",
        options: ["Software as a Service", "System and Application Source", "Secure automated Access Script", "Simple active storage"],
        correct: "Software as a Service"
    },
    {
        question: "¿Cuál de las siguientes opciones describe mejor a una cookie web?",
        options: ["Un virus troyano", "Un archivo de texto pequeño guardado en el navegador por un sitio web", "Un lenguaje de programación", "Un componente físico del servidor"],
        correct: "Un archivo de texto pequeño guardado en el navegador por un sitio web"
    },
    {
        question: "¿Qué etiqueta HTML se utiliza para definir un párrafo de texto?",
        options: ["<text>", "<p>", "<par>", "<div>"],
        correct: "<p>"
    },
    {
        question: "¿Qué significa la sigla SQL?",
        options: ["Structured Query Language", "Simple Query Logic", "System Quality Line", "Server Quick Link"],
        correct: "Structured Query Language"
    },
    {
        question: "¿Cuál es el operador lógico que representa la operación 'Y' (AND) en la mayoría de lenguajes?",
        options: ["||", "&&", "!", "+"],
        correct: "&&"
    },
    {
        question: "¿Qué función cumple un bucle o ciclo (como 'for' o 'while') en programación?",
        options: ["Detener el programa de inmediato", "Ejecutar un bloque de código múltiples veces de forma repetitiva", "Almacenar contraseñas de forma segura", "Diseñar la interfaz gráfica"],
        correct: "Ejecutar un bloque de código múltiples veces de forma repetitiva"
    },
    {
        question: "¿Qué significa la sigla Open Source?",
        options: ["Código abierto", "Licencia de pago único", "Sistema bloqueado", "Red privada"],
        correct: "Código abierto"
    },
    {
        question: "¿Cuál de los siguientes comandos de Linux se usa para eliminar un archivo?",
        options: ["rm", "del", "erase", "clear"],
        correct: "rm"
    },
    {
        question: "¿Qué significa la sigla HTTP?",
        options: ["HyperText Transfer Protocol", "HyperText Transmission Process", "High Tech Transfer Port", "Hyperlink Text Test Protocol"],
        correct: "HyperText Transfer Protocol"
    },
    {
        question: "¿Cuál de los siguientes lenguajes es puramente para marcado y estructura, sin lógica de programación?",
        options: ["JavaScript", "Python", "HTML", "C"],
        correct: "HTML"
    },
    {
        question: "¿Qué significa la sigla GUI?",
        options: ["Graphical User Interface", "Global Utility Integration", "General User Interaction", "Graphic Unified Internet"],
        correct: "Graphical User Interface"
    },
    {
        question: "¿Cuál es el objetivo de utilizar comentarios en el código fuente?",
        options: ["Hacer que el programa corra más rápido", "Documentar y explicar el código para los humanos", "Ocultar errores de sintaxis", "Comprimir el archivo"],
        correct: "Documentar y explicar el código para los humanos"
    },
    {
        question: "¿Qué significa la sigla URL?",
        options: ["Uniform Resource Locator", "Universal Record Link", "Unified Routing Logic", "User Remote List"],
        correct: "Uniform Resource Locator"
    },
    {
        question: "¿Cuál de los siguientes dispositivos conecta redes diferentes y enruta los paquetes de datos?",
        options: ["Switch", "Router", "Hub", "Cable coaxial"],
        correct: "Router"
    },
    {
        question: "¿Qué propiedad de CSS se utiliza para modificar el grosor o peso de la fuente?",
        options: ["font-weight", "text-style", "font-size", "bold-text"],
        correct: "font-weight"
    },
    {
        question: "¿Qué significa la sigla SSL en seguridad informática?",
        options: ["Secure Sockets Layer", "System Security Link", "Safe Source Local", "Server Side Logic"],
        correct: "Secure Sockets Layer"
    },
    {
        question: "¿Cuál de las siguientes opciones es una buena práctica al nombrar variables en programación?",
        options: ["Usar nombres descriptivos y claros", "Usar solo una letra aleatoria", "Dejar espacios en blanco", "Empezar siempre con números"],
        correct: "Usar nombres descriptivos y claros"
    },
    {
        question: "¿Qué significa la sigla CLI?",
        options: ["Command Line Interface", "Central Link Integration", "Common Language Interaction", "Control Logic Instruction"],
        correct: "Command Line Interface"
    },
    {
        question: "¿Cuál de los siguientes programas es un navegador web?",
        options: ["Linux", "Google Chrome", "MySQL", "Visual Studio Code"],
        correct: "Google Chrome"
    },
    {
        question: "¿Qué etiqueta HTML se utiliza para encabezados de nivel 1 (el más grande e importante)?",
        options: ["<head>", "<h1>", "<header>", "<title>"],
        correct: "<h1>"
    },
    {
        question: "¿Qué significa la sigla API?",
        options: ["Application Programming Interface", "Advanced Protocol Integration", "Automated Program Item", "Application Process Index"],
        correct: "Application Programming Interface"
    },
    {
        question: "¿Cuál es la función del método 'console.log()' en JavaScript?",
        options: ["Mostrar mensajes en la consola del navegador para depuración", "Crear una ventana emergente", "Cambiar el estilo CSS", "Borrar la base de datos"],
        correct: "Mostrar mensajes en la consola del navegador para depuración"
    },
    {
        question: "¿Qué significa la sigla DNS?",
        options: ["Domain Name System", "Digital Node Source", "Data Network Service", "Direct Name Security"],
        correct: "Domain Name System"
    },
    {
        question: "¿Cuál de los siguientes lenguajes se utiliza principalmente para consultas en bases de datos relacionales?",
        options: ["HTML", "SQL", "CSS", "XML"],
        correct: "SQL"
    },
    {
        question: "¿Qué significa la sigla VPN?",
        options: ["Virtual Private Network", "Very Private Node", "Virtual Protected Name", "Verified Public Network"],
        correct: "Virtual Private Network"
    },
    {
        question: "¿Cuál de los siguientes comandos de Git se usa para ver el estado actual del repositorio y los archivos modificados?",
        options: ["git status", "git log", "git push", "git init"],
        correct: "git status"
    },
    {
        question: "¿Qué significa la sigla JSON?",
        options: ["JavaScript Object Notation", "Java Source Open Network", "Junction System Output Node", "JavaScript Online Native"],
        correct: "JavaScript Object Notation"
    },
    {
        question: "¿Cuál de los siguientes es un editor de código fuente muy popular?",
        options: ["Visual Studio Code", "Microsoft Paint", "Adobe Photoshop", "VLC Player"],
        correct: "Visual Studio Code"
    },
    {
        question: "¿Qué significa la sigla OS?",
        options: ["Operating System", "Open Source", "Online Service", "Output Structure"],
        correct: "Operating System"
    },
    {
        question: "¿Cuál es el propósito de una función en programación?",
        options: ["Agrupar un bloque de código reutilizable que realiza una tarea específica", "Llenar la memoria RAM", "Evitar que el programa corra", "Generar errores automáticos"],
        correct: "Agrupar un bloque de código reutilizable que realiza una tarea específica"
    },
    {
        question: "¿Qué significa la sigla RAM?",
        options: ["Random Access Memory", "Read Access Machine", "Rapid Active Module", "Run Application Memory"],
        correct: "Random Access Memory"
    },
    {
        question: "¿Cuál de los siguientes protocolos se encarga de asignar direcciones IP automáticamente en una red?",
        options: ["DHCP", "DNS", "FTP", "SMTP"],
        correct: "DHCP"
    },
    {
        question: "¿Qué significa la sigla HTML?",
        options: ["HyperText Markup Language", "High Transfer Machine Language", "Hyperlink Text Modern Link", "Home Tool Multi Language"],
        correct: "HyperText Markup Language"
    },
    {
        question: "¿Cuál es la extensión estándar para los archivos que contienen código fuente de JavaScript?",
        options: [".html", ".js", ".css", ".py"],
        correct: ".js"
    },
    {
        question: "¿Qué significa la sigla UI?",
        options: ["User Interface", "Unified Integration", "User Interaction", "Universal Internet"],
        correct: "User Interface"
    },
    {
        question: "¿Cuál de los siguientes comandos de Linux se utiliza para mover o renombrar archivos?",
        options: ["cp", "mv", "rm", "ls"],
        correct: "mv"
    },
    {
        question: "¿Qué significa la sigla UX?",
        options: ["User Experience", "Universal XML", "User Execution", "Unidad X"],
        correct: "User Experience"
    }
];
