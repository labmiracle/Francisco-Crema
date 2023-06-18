function caracterRepetido(carac: string): number {
    let caracterR = carac.replace(/\s/g, "");
    caracterR = caracterR.toUpperCase();

    for (let i = 0; i < caracterR.length; i++) {
        if (caracterR[i] === caracterR[i + 1]) {
            return i;
        }
    }
    return -1;
}

export { caracterRepetido };
