/* 
1. Vamos a implementar el juego de Code Breaker. El juego comienza generando un número
al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.
2. El usuario ingresa un número intentando adivina el número secreto
3. Si alguno de los números concuerda en la posición original, se muestra una X
4. Si alguno de los números no concuerda con la posición original, pero esta en el número
secreto en otra posición, muestra un -
5. El orden en que se muestran es el siguiente: XX- (primero las X y luego los -)
6. Ejemplo:
Número secreto: 2561
Primer intento: 1334
Salida: -
Segundo intento: 4251
Salida: X--
Tercer intento: 6521
Salida: XX-- 
*/

function numeroRandom(): string {
    let numeroSecreto = "";
    for (let i = 0; i < 4; i++) {
        const digitos = Math.floor(Math.random() * 7);
        numeroSecreto += digitos;
    }
    return numeroSecreto;
}

function verificacionNumero(
    numeroSecreto: string,
    intentoDeNumero: string
): string {
    let salida = "";
    for (let i = 0; i < numeroSecreto.length; i++) {
        if (numeroSecreto[i] === intentoDeNumero[i]) {
            salida += "x";
        } else if (numeroSecreto.includes(intentoDeNumero[i])) {
            salida += "-";
        } else {
            salida += " ";
        }
    }
    return salida;
}

const numeroSecreto = numeroRandom();
console.log(`El numero secreto es: ${numeroSecreto}`);

const primerIntento = "1334";
const primerPista = verificacionNumero(numeroSecreto, primerIntento);
console.log(`Salida: ${primerPista}`);

const segundoIntento = "4251";
const segundoPista = verificacionNumero(numeroSecreto, segundoIntento);
console.log(`Salida: ${segundoPista}`);

const tercerIntento = "6521";
const tercerPista = verificacionNumero(numeroSecreto, tercerIntento);
console.log(`Salida: ${tercerPista}`);
