function matrizMax(matrix: (number | string)[][]): number {
    let numMax: number = 0;
    let maxSoFar: number = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const value = Number(matrix[i][j]);
            if (value !== 0 && value !== 1) {
                return -1;
            } else if (value === 1) {
                numMax++;
                maxSoFar = Math.max(maxSoFar, numMax);
            } else {
                numMax = 0;
            }
        }
    }

    return maxSoFar;
}

export { matrizMax };
