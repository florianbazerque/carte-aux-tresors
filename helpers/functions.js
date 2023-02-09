const NORTH = 'N';
const SOUTH = 'S';
const WEST = 'O';
const EAST = 'E';

export function updateOrientation(currentOrientation, movement) {

    if(!['G','D'].includes(movement)) {
        return currentOrientation;
    }

    switch(currentOrientation) {
      case NORTH:
        return movement === 'G' ? WEST : EAST;
      case EAST:
        return movement === 'G' ? NORTH : SOUTH;
      case SOUTH:
        return movement === 'G' ? EAST : WEST;
      case WEST:
        return movement === 'G' ? SOUTH : NORTH;
      default:
        return currentOrientation;
    }
}

export function calculateNewCoordinates(long, lat, orientation) {
    switch(orientation) {
        case NORTH:
            lat-- >= 0 ??  lat--;
            break;
        case EAST:
            long++;
            break;
        case SOUTH:
            lat++;
            break;
        case WEST:
            long-- >= 0 ??  long--;
            break;
        default:
            break;
      }
      return { long, lat }
}

export function isDestinationAvailable(map, mountainsArray, adventurersArray, long, lat) {
    if(long >= 0 && long <= map.length && lat >= 0 && lat <= map.height) {
        if(
            mountainsArray.filter(m => m.long === long && m.lat === lat).length !== 0 || 
            adventurersArray.filter(a => a.long === long && a.lat === lat).length !== 0
        ) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export function resultOutput(map, mountainsArray, treasursArray, adventurersArray) {
    let output = `C - ${map.length} - ${map.height}\n`;

    mountainsArray.forEach(m => output+= `${m.getMountain()}\n`);
    treasursArray.forEach(t => output+= `${t.getFinalResult()}\n`);
    adventurersArray.forEach(a => output+= `${a.getFinalResult()}\n`);

    return output;
}