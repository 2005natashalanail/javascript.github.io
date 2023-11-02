const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parOImparElement = document.getElementById("parOImpar");

function parOImpar(numero) {
    if (numero % 2 === 0) {
        parOImparElement.innerHTML += `El número ${numero} es par<br>`;
    } else {
        parOImparElement.innerHTML += `El número ${numero} es impar<br>`;
    }
}

for (let i = 0; i < numeros.length; i++) {
    parOImpar(numeros[i]);
}


const frutas = ["manzana", "durazno", "damasco"];
const listaDeFrutasElement = document.getElementById("listaDeFrutas");

for (let i = 0; i < frutas.length; i++) {
    listaDeFrutasElement.innerHTML += `${frutas[i]}<br>`;
}

frutas.push("naranja");
listaDeFrutasElement.innerHTML += `La nueva fruta: ${frutas[frutas.length - 1]}<br>`;

function chequearLongitud(frutas) {
    const longitudElement = document.getElementById("longitud");
    if (frutas.length % 2 === 0) {
        longitudElement.innerHTML = "La longitud es par";
    } else {
        longitudElement.innerHTML = "La longitud es impar";
    }
}

chequearLongitud(frutas);


const frases = [
    "todo va a ser mejor",
    "la vida es linda",
    "soy feliz",
    "amo dibujar",
    "hacer lo que amas"
];
const frasesRandomElement = document.getElementById("frasesRandom");

function fraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    frasesRandomElement.innerHTML = frases[indiceAleatorio];
}


function aprobarOReprobar(nombre, nota) {
    const aprobarOReprobarElement = document.getElementById("aprobarOReprobar");
    if (nota >= 4) {
        aprobarOReprobarElement.innerHTML = `El alumno ${nombre} aprobó`;
    } else {
        aprobarOReprobarElement.innerHTML = `El alumno ${nombre} reprobó la cursada`;
    }
}

aprobarOReprobar("Luana", 2);



const equipoAzul = ["Matias", "Luana", "Sofia", "Zenon"];
const equipoAmarillo = ["Sofia", "Lautaro", "Safir", "Camila"];
const equiposFutbolElement = document.getElementById("equiposFutbol");

function queEquipo(jugador) {
    if (equipoAzul.includes(jugador)) {
        equiposFutbolElement.innerHTML = "El jugador es del equipo azul";
    } else {
        equiposFutbolElement.innerHTML = "El jugador es del equipo amarillo";
    }
}

queEquipo("Matias");
queEquipo("Safir");
