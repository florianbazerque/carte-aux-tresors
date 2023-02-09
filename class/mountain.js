export class Mountain {
    constructor(long, lat) {
        this.long = long;
        this.lat = lat;
    }

    getMountain() {
        return `M - ${this.long} - ${this.lat}`;
    }
}