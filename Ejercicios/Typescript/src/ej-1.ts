/*
Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas.
*/

function myFunction(joyas: string, piedras: string): number {
    let piedraEncontrada = 0;

    for (let i = 0; i < piedras.length; i++) {
        let piedra = piedras[i];
        if (joyas.includes(piedra)) {
            piedraEncontrada++;
        }
    }

    return piedraEncontrada;
}

console.assert(myFunction("aA", "aAAbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);
