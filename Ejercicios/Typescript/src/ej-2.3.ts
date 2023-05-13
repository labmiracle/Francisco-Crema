function flatten<T>(array: (T | T[])[]): T[] {
    const flattened: T[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element; // T[]
            flattened.push(...element);
        } else {
            element; // T
            flattened.push(element);
        }
    }

    return flattened;
}

const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
const flattenedNumbers: number[] = flatten(numbers);

const strings: (string | string[])[] = ["hello", ["world", "again"], "bye"];
const flattenedStrings: string[] = flatten(strings);

console.log("[Ejercicio 2.3] Numbers:", flattenedNumbers);
console.log("[Ejercicio 2.3] Strings:", flattenedStrings);

export default flatten;
