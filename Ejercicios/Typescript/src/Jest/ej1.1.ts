function fizzBuzz(num: number | string): string {
    if (typeof num === "string") {
        num = parseInt(num);
    }
    if (num === 0) {
        return num.toString();
    }
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else {
        return num.toString();
    }
}

export { fizzBuzz };
