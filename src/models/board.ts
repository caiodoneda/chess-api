export default class Board {
    private positions: Array<Array<number>>;

    constructor(size: number) {
        const rows = Array(size).fill(0);
        this.positions = Array(size).fill(rows);
    }
};