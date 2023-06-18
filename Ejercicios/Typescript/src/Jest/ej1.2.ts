function añoB(num: number): boolean | string {
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

export { añoB };
