export class Treasur {
    constructor(long, lat, number) {
        this.long = long;
        this.lat = lat;
        this.number = number;
    }

    substractTreasur() {
        this.number--;
    }

    getFinalResult() {
        return `T - ${this.long} - ${this.lat} - ${this.number}`;
    }
}