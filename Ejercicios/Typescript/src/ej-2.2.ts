export default function padLeft(
    value: string,
    padding: number | string
): string {
    if (padding === "number") {
        return `${Array(padding + 1).join(" ")}${value}`;
    } else {
        return padding + value;
    }
}
console.log(
    "[Ejercicio 2.2]",
    `
 ${padLeft("Hola", 0)}
 ${padLeft("3", "5")}
 ${padLeft("funca", 200)}
 ${padLeft("68", "buenas")}
 ${padLeft("0", 100)}`
);
