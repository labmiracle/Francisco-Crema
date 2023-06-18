// const caracteresCanonicos = ["C", "T", "A", "G"];

// function eliminaNoCanonicos(adn: string): string {
//     let soloCanonicos;

//     if (adn.length === 0) {
//         return "";
//     }

//     soloCanonicos = adn.split("");
//     soloCanonicos = soloCanonicos.filter(caracter =>
//         caracteresCanonicos.includes(caracter.toUpperCase())
//     );
//     soloCanonicos = soloCanonicos.join("");

//     return soloCanonicos;
// }

// export { eliminaNoCanonicos };

function canonicoNoEliminado(adn: string): string {
    if (adn.length === 0) {
        return "";
    }

    const baseCanonicos = ["C", "T", "A", "G"];
    let canonicos;
    canonicos = adn.split("");
    canonicos = canonicos.filter(caracter =>
        baseCanonicos.includes(caracter.toUpperCase())
    );
    canonicos = canonicos.join("");
    return canonicos;
}

export { canonicoNoEliminado };
