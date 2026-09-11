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
        question: "¿En qué lenguaje está escrito principalmente este proyecto?",
        options: ["Python", "HTML/JavaScript", "C++", "Java"],
        correct: "HTML/JavaScript"
    },
    {
        question: "¿Qué protocolo se utiliza para asegurar las páginas web (HTTPS)?",
        options: ["HTTP", "SSL/TLS", "FTP", "SSH"],
        correct: "SSL/TLS"
    },
    {
        question: "¿Cuál es el puerto predeterminado para el protocolo HTTP?",
        options: ["21", "80", "443", "8080"],
        correct: "80"
    },
    {
        question: "¿Qué componente de la computadora se encarga de procesar las instrucciones?",
        options: ["RAM", "CPU", "Disco Duro", "Fuente de Poder"],
        correct: "CPU"
    },
    {
        question: "¿Qué lenguaje de programación se utiliza principalmente para consultar bases de datos relacionales?",
        options: ["HTML", "SQL", "CSS", "JSON"],
        correct: "SQL"
    },
    {
        question: "¿Cómo se llama el sistema de control de versiones creado por Linus Torvalds?",
        options: ["SVN", "Git", "Mercurial", "CVS"],
        correct: "Git"
    },
    {
        question: "¿Qué significa la sigla RAM en informática?",
        options: ["Read Access Memory", "Random Access Memory", "Run Active Machine", "Rapid Application Module"],
        correct: "Random Access Memory"
    },
    {
        question: "¿Cuál es la función principal de una dirección IP?",
        options: ["Identificar un dispositivo en una red", "Acelerar el procesador", "Medir la velocidad de internet", "Comprimir archivos pesados"],
        correct: "Identificar un dispositivo en una red"
    },
    {
        question: "¿Qué significa HTML?",
        options: ["HyperText Markup Language", "High Tech Modern Language", "HyperTransfer Machine Language", "Home Tool Markup Language"],
        correct: "HyperText Markup Language"
    },
    {
        question: "¿Qué tipo de lenguaje es JavaScript?",
        options: ["Lenguaje de marcado", "Lenguaje de programación interpretado", "Lenguaje de consulta", "Sistema operativo"],
        correct: "Lenguaje de programación interpretado"
    },
    {
        question: "¿Qué significa la sigla URL?",
        options: ["Uniform Resource Locator", "Universal Remote Link", "Unified Response Line", "User Registry Level"],
        correct: "Uniform Resource Locator"
    },
    {
        question: "¿Cuál de los siguientes no es un navegador web?",
        options: ["Google Chrome", "Mozilla Firefox", "Linux Mint", "Microsoft Edge"],
        correct: "Linux Mint"
    },
    {
        question: "¿Qué estructura de datos sigue el principio LIFO (Último en entrar, primero en salir)?",
        options: ["Cola (Queue)", "Pila (Stack)", "Árbol (Tree)", "Tabla hash"],
        correct: "Pila (Stack)"
    },
    {
        question: "¿Qué significa la sigla SSD en almacenamiento?",
        options: ["Solid State Drive", "Super Speed Disk", "System Serial Device", "Simple Secure Data"],
        correct: "Solid State Drive"
    },
    {
        question: "¿Cuál es el puerto estándar para conexiones seguras mediante HTTPS?",
        options: ["80", "21", "443", "3306"],
        correct: "443"
    },
    {
        question: "¿Qué herramienta se usa comúnmente para alojar repositorios Git en la nube?",
        options: ["GitHub", "Photoshop", "Canva", "Excel"],
        correct: "GitHub"
    },
    {
        question: "¿Qué significa API en el desarrollo de software?",
        options: ["Application Programming Interface", "Advanced Program Integration", "Automated Process Interaction", "Applied Protocol Index"],
        correct: "Application Programming Interface"
    },
    {
        question: "¿Qué lenguaje se emplea principalmente para dar estilos y diseño a una página web?",
        options: ["Python", "CSS", "SQL", "PHP"],
        correct: "CSS"
    },
    {
        question: "¿Qué es un archivo con extensión .py por lo general?",
        options: ["Un script de Python", "Una hoja de cálculo", "Una imagen comprimida", "Un documento de texto plano"],
        correct: "Un script de Python"
    },
    {
        question: "¿Cuál de las siguientes opciones es una base de datos NoSQL?",
        options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
        correct: "MongoDB"
    },
    {
        question: "¿Qué significa la sigla DNS?",
        options: ["Domain Name System", "Digital Network Security", "Data Node Source", "Dynamic Name Service"],
        correct: "Domain Name System"
    },
    {
        question: "¿Qué comando de Git se utiliza para descargar cambios desde un repositorio remoto?",
        options: ["git push", "git pull", "git commit", "git status"],
        correct: "git pull"
    },
    {
        question: "¿Qué es un bucle 'for' en programación?",
        options: ["Una estructura de control repetitiva", "Una base de datos", "Un error de sintaxis", "Un tipo de variable numérica"],
        correct: "Una estructura de control repetitiva"
    },
    {
        question: "¿Cuál es el significado del acrónimo USB?",
        options: ["Universal Serial Bus", "Uniform System Board", "User Shared Block", "Ultra Speed Binary"],
        correct: "Universal Serial Bus"
    },
    {
        question: "¿Qué etiqueta de HTML se usa para crear un enlace o hipervínculo?",
        options: ["<a>", "<p>", "<div>", "<img>"],
        correct: "<a>"
    },
    {
        question: "¿Qué significa JSON en el intercambio de datos web?",
        options: ["JavaScript Object Notation", "Java Source Open Network", "Joint System Online Node", "Jumbo Scripted Object Name"],
        correct: "JavaScript Object Notation"
    },
    {
        question: "¿Qué software libre se utiliza frecuentemente en móviles para emular una terminal de comandos Linux?",
        options: ["Termux", "Notepad", "Paint", "Calculator"],
        correct: "Termux"
    },
    {
        question: "¿Qué significa SQL?",
        options: ["Structured Query Language", "Simple Quick List", "System Quality Line", "Standard Query Logic"],
        correct: "Structured Query Language"
    },
    {
        question: "¿Cuál es la función principal de una etiqueta <img /> en HTML?",
        options: ["Mostrar una imagen", "Crear un botón", "Insertar un salto de línea", "Añadir un párrafo"],
        correct: "Mostrar una imagen"
    },
    {
        question: "¿Qué comando de Git guarda los cambios localmente con un mensaje descriptivo?",
        options: ["git commit", "git push", "git clone", "git init"],
        correct: "git commit"
    },
    {
        question: "¿Qué es un archivo con extensión .html?",
        options: ["Una página web estructurada", "Una hoja de estilos", "Un archivo ejecutable", "Una base de datos"],
        correct: "Una página web estructurada"
    },
    {
        question: "¿Cuál de los siguientes lenguajes se ejecuta principalmente del lado del cliente en el navegador?",
        options: ["JavaScript", "Python", "PHP", "Node.js"],
        correct: "JavaScript"
    },
    {
        question: "¿Qué significa IDE en el contexto de programación?",
        options: ["Integrated Development Environment", "Internal Data Engine", "Internet Design Element", "Interactive Disk Extension"],
        correct: "Integrated Development Environment"
    },
    {
        question: "¿Qué etiqueta se utiliza para encabezados de mayor jerarquía en HTML?",
        options: ["<h1>", "<h6>", "<head>", "<header>"],
        correct: "<h1>"
    },
    {
        question: "¿Qué es un algoritmo?",
        options: ["Una secuencia de pasos lógicos para resolver un problema", "Un error de hardware", "Un tipo de virus informático", "Un diseño de interfaz"],
        correct: "Una secuencia de pasos lógicos para resolver un problema"
    },
    {
        question: "¿Cuál de las siguientes opciones describe mejor a GitHub Pages?",
        options: ["Un servicio de alojamiento web gratuito para sitios estáticos", "Un compilador de código móvil", "Un sistema operativo", "Un antivirus en la nube"],
        correct: "Un servicio de alojamiento web gratuito para sitios estáticos"
    },
    {
        question: "¿Qué es un framework en programación?",
        options: ["Una estructura o sombrilla de trabajo predefinida que facilita el desarrollo", "Un cable de conexión de red", "Una memoria RAM auxiliar", "Un formato de imagen"],
        correct: "Una estructura o sombrilla de trabajo predefinida que facilita el desarrollo"
    }
];
