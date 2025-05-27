export const pos = () => {
    const positions = [...Array(8).keys()].map(() => Array(8).fill(" "));
    positions[0][0] = 'wr';
    positions[0][1] = 'wn';
    positions[0][2] = 'wb';
    positions[0][3] = 'wq';
    positions[0][4] = 'wk';
    positions[0][5] = 'wb';
    positions[0][6] = 'wn';
    positions[0][7] = 'wr';
    [...Array(8).keys()].map((i) => positions[1][i] = 'wp');
    positions[7][0] = 'br';
    positions[7][1] = 'bn';
    positions[7][2] = 'bb';
    positions[7][3] = 'bq';
    positions[7][4] = 'bk';
    positions[7][5] = 'bb';
    positions[7][6] = 'bn';
    positions[7][7] = 'br';
    [...Array(8).keys()].map((i) => positions[6][i] = 'bp');
    return positions;
}

export const fileToNum = (file) => {
    switch (file) {
        case 'a':
            return 0;
        case 'b':
            return 1;
        case 'c':
            return 2;
        case 'd':
            return 3;
        case 'e':
            return 4;
        case 'f':
            return 5;
        case 'g':
            return 6;
        case 'h':
            return 7;
        default:
            return null
    }
}