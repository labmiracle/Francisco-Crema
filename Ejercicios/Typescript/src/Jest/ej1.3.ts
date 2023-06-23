const caracteresCanonicos = ["C", "T", "A", "G"];

function eliminaNoCanonicos(adn: string): string {
    let soloCanonicos;

    if (adn.length === 0) {
        return "";
    }

    soloCanonicos = adn.split("");
    soloCanonicos = soloCanonicos.filter(caracter =>
        caracteresCanonicos.includes(caracter.toUpperCase())
    );
    soloCanonicos = soloCanonicos.join("");

    return soloCanonicos;
}

export { eliminaNoCanonicos };
