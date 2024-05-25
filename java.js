document.addEventListener('DOMContentLoaded', function() {//Esto es para que simpre cuando se cargue la pagina, el bot haga la primera pregunta sin tener que darle al botn "Enviar"
    
    if (paso === 0) {
        Chat();
    }
});

let paso = 0; //Aqui es donde inicia los paso del bot
let Nombre = ""; // En esta parte pueden guiardar un nombre de usuario
let Libros = 0; //Aqui guardar la cantidad de libors que el usuario ha leido
let Paginas = 0; //Aqui se guardara cuantas paginas le gustaria al usuario que tenga su libro
let Genero = ""; //Aqui se guardar el genero que el usuario quiere el libro

function Chat() { //Aqui inica el algoritmo del bot
    const Chatbox = document.getElementById("Box"); //Aqui se va a definir que la constante "chatbox" va a ser igual al id de div "box"
    const Input = document.getElementById("Input").value; //Aqui va a capturar la infomacion que se ponga en el input

    
    if (paso === 0) {//Este es el paso por que que va
        const Bot = document.createElement("div");//Aquie le estan pidiendo al bot que cree un nuevo contenedor div
        Bot.className = "message Bot";
        Bot.textContent = "Bot: Bienvenido ¿Cuál es tu nombre?";//Aqui estan definiendo el mensaje que estara dentro del div que el bot esta creando
        Chatbox.appendChild(Bot);//Aqui estan añadiendo dentro del div "Box" el mensaje que el bot esta creando
        paso++;//Aqui al terminar lo demas se sumara un paso al prceso del bot
    } else if (paso === 1) { // Aqui verificara si el paso se sumo y ahora estamos en el siguiente paso, si el paso inicial era 0, ahora el siguiente tiene que ser 1
        Nombre = Input; //Aqui se establece que Nombre va a ser igual a lo que se escriba en el input
        const User = document.createElement("div");//aqui estamos creando un div para la respusta que estamos dando
        User.className = "message User";
        User.textContent = `Tu: ${Input}`;//aqui estamos definiendo el mensaje que tendra nuestro div, en este caso hacemos que lo que escribimos en el input sea el mensaje
        Chatbox.appendChild(User);//Aqui añadimos el div que hemos creado al div "Box"
        paso++; //Aqui se hace que bot vuelva a sumar otro paso

        //Esta es la logica, por cada pregunta que quieran que el bot haga, la parte de if, sera simpre lo que l bot va a pregunar y despues se mostrara en el contenedor principal que es el div "Box". Por otro lado, el else if, es simpre lo que nosotros le estamos respondiendo al bot, ppor lo tanto lo que escribamos en el input, se mostrara en el div "Box".
        
        //De esta forma pueden hacer que el bot haga las preguntas que quieran, recuerden que porcada nueva pregunta y respuesta el bot esta sumando un paso, por eso es inportante que lleven la cuenta.
    }

    if (paso === 2) {//Como pueden ver aqui, la siguiente pregunta es "¿cuantos libris has leido?" por lo tanto el paso del bot cambia a 2. tengan muy encuenta que "===" se usa para hacer una comparacion, en este caso "paso===2" estmos comparando si el paso ya esta en el numero 2. por otro lado "=" se usa para decir que una cosa es igual a otra.
        const Bot = document.createElement("div");//Crea el div de lo que pregunta el bot
        Bot.className = "message Bot";
        Bot.textContent = `Bot: ${Nombre} ¿Què edad tienes?`;//Aqui va lo que pregunta el bot
        Chatbox.appendChild(Bot);//Agrega  un div con la pregunta del bot
        paso++;//suma paso
    } else if (paso === 3) {//Compara si paso ya esta en el numero 3
        Libros = Input;// Hace que la variable "Libros" sea igual a lo que el usuario escriba en el input 
        const User = document.createElement("div");//crea el div de lo que responde el usuario
        User.className = "message User";
        User.textContent = `Tu: ${Input}`;//Contenido del div que crea el usuario
        Chatbox.appendChild(User);//agrega el div del usuario al div "Box"
        paso++; //suma un paso
    }

    if (paso === 4) {
        const Bot = document.createElement("div");
        Bot.className = "message Bot";
        Bot.textContent = `Bot: ¿Mas o menos de cuantas paginas te gustaria leer un libro?`;
        Chatbox.appendChild(Bot);
        paso++;
    } else if (paso === 5) {
        if (!isNaN(Input)) {
            Paginas = Input; 
            const User = document.createElement("div");
            User.className = "message User";
            User.textContent = `Tu: ${Input}`;
            Chatbox.appendChild(User);
            paso++; 
        } else {
            alert("Ingresa un numero");
        }
    }
    

    if (paso === 6) {
        const Bot = document.createElement("div");
        Bot.className = "message Bot";
        Bot.textContent = `Bot: de los siguientes generos, selecciona el numero correspodiente al libro que quieres leer:
        1)Terror
        
        2)Fantasia
        
        3)Romance
        
        4)Aventura`;

        Chatbox.appendChild(Bot);
        paso++;
    } else if (paso === 7) {
        Genero = Input; 
        const User = document.createElement("div");
        User.className = "message User";
        User.textContent = `Tu: ${Input}`;
        Chatbox.appendChild(User);
        paso++; 
    }
    
    

    }

