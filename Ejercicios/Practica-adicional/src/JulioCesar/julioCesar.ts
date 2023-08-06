class CombinedEncoder {
  private static ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ";

  static encodeAndReverse(message: string, shift: number): string {
    const reversedMessage = message.split("").reverse().join("");

    const encodedMessage = reversedMessage
      .toUpperCase()
      .split("")
      .map((char) => {
        const index = this.ALPHABET.indexOf(char);
        if (index === -1) {
          return char;
        }
        const newIndex = (index + shift) % this.ALPHABET.length;
        return this.ALPHABET[newIndex];
      })
      .join("");

    return encodedMessage.split("").reverse().join("");
  }

  static decodeAndReverse(encodedMessage: string, shift: number): string {
    const reversedEncodedMessage = encodedMessage.split("").reverse().join("");

    const decodedMessage = reversedEncodedMessage
      .toUpperCase()
      .split("")
      .map((char) => {
        const index = this.ALPHABET.indexOf(char);
        if (index === -1) {
          return char;
        }
        const newIndex =
          (index - shift + this.ALPHABET.length) % this.ALPHABET.length;
        return this.ALPHABET[newIndex];
      })
      .join("");

    return decodedMessage.split("").reverse().join("");
  }
}

const originalText = "WIKIPEDIA, LA ENCICLOPEDIA LIBRE";
const shiftAmount = 6;

const encodedAndReversed = CombinedEncoder.encodeAndReverse(
  originalText,
  shiftAmount
);
console.log("Texto codificado y revertido:", encodedAndReversed);

const decodedAndReversed = CombinedEncoder.decodeAndReverse(
  encodedAndReversed,
  shiftAmount
);
console.log("Texto decodificado y revertido:", decodedAndReversed);
