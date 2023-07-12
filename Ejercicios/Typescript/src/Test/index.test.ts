import { fizzBuzz } from "../Jest/ej1.1";
import { añoB } from "../Jest/ej1.2";
import { eliminaNoCanonicos } from "../Jest/ej1.3";
import { numPositivo } from "../Jest/ej1.4";
import { caracterRepetido } from "../Jest/ej1.5";
import { matrizMax } from "../Jest/ej1.6";
import { lookup } from "../Jest/ej1.7";
import { setPrice, addToCart } from "../Jest/ej1.8";

test("Ejercicio 1.1", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(15)).toMatch(/FizzBuzz/);
    expect(fizzBuzz(0)).toBe("0");
});

test("Ejercicio 1.2", () => {
    expect(añoB(1900)).toBeFalsy();
    expect(añoB(2000)).toBeTruthy();
});

describe("ejercicio 1.3: devuelve cadena de ADN con valores canonicos unicamente(ACTG)", () => {
    expect(eliminaNoCanonicos("sdDBVCASDGH")).toBe("CAG");
    expect(eliminaNoCanonicos("3h5ro")).toBe("");
});

test("Ejercicio 1.4", () => {
    expect(numPositivo([1, 4, 8, -37, -2])).toBe(13);
    expect(numPositivo([])).toBe(0);
});

test("Ejercicio 1.5", () => {
    expect(caracterRepetido("Hola, como va?")).toBe(-1);
    expect(caracterRepetido("HoOla, como va?")).toBe(1);
});

test("Ejercicio 1.6: Debería devolver la cantidad máxima de 1s", () => {
    const matrizValida: (number | string)[][] = [
        [1, 0, 1],
        [0, 1, 1],
        [0, "1", "1"],
        ["0", 1, "1"],
    ];
    expect(matrizMax(matrizValida)).toBe(2);
});

test("Debería devolver 0 si no hay 1s", () => {
    const matrizSinConsecutivos: (number | string)[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    expect(matrizMax(matrizSinConsecutivos)).toBe(0);
});

test("Debería devolver -1 si la matriz contiene valores diferentes de 0 y 1", () => {
    const matrizConValoresInvalidos: (number | string)[][] = [
        [1, 0, 1],
        [0, "1", "1"],
        ["0", 1, "o"],
    ];
    expect(matrizMax(matrizConValoresInvalidos)).toBe(-1);
});

describe("Ejercicio 1.7", () => {
    it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
        const actual = lookup("norvig", "likes");
        const expected = ["AI", "Search", "NASA", "Mars"];
        expect(actual).toEqual(expected);
    });
    it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
        const actual = lookup("knuth", "lastName");
        const expected = "Knuth";
        expect(actual).toEqual(expected);
    });
    it("with unknown user should throw an error with the correct message", () => {
        expect(() => {
            lookup("nobody", "likes");
        }).toThrow(/Could not find user/);
    });
    it("with unknown property should throw an error the correct message", () => {
        expect(() => {
            lookup("mfowler", "noprop");
        }).toThrow(/Could not find property/);
    });
});

describe("ejercicio 1.8: setPrice()", () => {
    it("should set the price in the given item object, immutably.", () => {
        const item = {
            name: "test",
            price: 30,
        };
        const copy = Object.assign({}, item);

        const actual = setPrice(item, 50);
        const expected = {
            name: "test",
            price: 50,
        };

        expect(actual).toEqual(expected);
        expect(item).toEqual(copy);
    });
});
describe("ejercicio 1.8: addToCart()", () => {
    it("should add item to cart, immutably", () => {
        const originalCart: [] = [];
        const item = {
            name: "Toy",
            price: 30,
        };
        const copy = originalCart.slice();

        const actual = addToCart(originalCart, item);
        const expected = [item];

        expect(actual).toEqual(expected);
        expect(originalCart).toEqual(copy);
    });
});
