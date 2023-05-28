/* 
Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que obtiene el número más alto gana.

1.Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo menos mientras se este utilizando ese mazo

2.Las cartas que saca cada jugador deben salir en orden aleatorio 
*/

class DrawCarta {
    mazo: number[];

    constructor() {
        this.mazo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }

    agarrarCarta() {
        for (let i = 0; i < this.mazo.length; i++) {
            const j = Math.floor(Math.random() * this.mazo.length);
            [this.mazo[i], this.mazo[j]] = [this.mazo[j], this.mazo[i]];
        }
    }

    sacarCarta(): number {
        if (this.mazo.length === 0) {
            throw new Error("No tiene cartas el mazo");
        }
        return this.mazo.pop()!;
    }
}

const jugando = new DrawCarta();

jugando.agarrarCarta();

const jugador1 = jugando.sacarCarta();
const jugador2 = jugando.sacarCarta();
if (jugador1 === null || jugador2 === null) {
    console.log("El mazo no tiene cartas");
} else if (jugador1 > jugador2) {
    console.log(`El jugador numero 1 gano con la carta ${jugador1}`);
} else if (jugador2 > jugador1) {
    console.log(`El jugador numero 2 gano con la carta ${jugador2}`);
} else {
    console.log("Empate, los jugadores tienen la misma carta ");
}
