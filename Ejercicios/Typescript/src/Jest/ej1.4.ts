function numPositivo(num: any[]): number {
    let count: number = 0;
    for (let i = 0; i < num.length; i++) {
        const number = Number(num[i]);
        if (typeof number === "number" && num[i] > 0) {
            count += num[i];
        }
    }

    return count;
}

export { numPositivo };
