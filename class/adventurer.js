export class Adventurer {
    treasurs = 0;
    constructor(name, long, lat, orientation, movement) {
        this.name = name;
        this.long = long;
        this.lat = lat;
        this.orientation = orientation;
        this.movement = movement;
    }

    addTreasur() {
        this.treasurs++;
    }

    getFinalResult() {
        return `A - ${this.name} - ${this.long} - ${this.lat} - ${this.orientation} - ${this.treasurs}`;
    }

    setNewCoordinates(long, lat) {
        this.long = long;
        this.lat = lat;
    }
}