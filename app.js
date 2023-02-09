import { readFile, writeFile } from 'node:fs/promises';
import { Adventurer } from './class/adventurer.js';
import { Mountain } from './class/mountain.js';
import { Treasur } from './class/treasur.js';
import { updateOrientation, calculateNewCoordinates, isDestinationAvailable, resultOutput } from './helpers/functions.js';
import { inputRegex } from './helpers/utils.js';

console.log('Début de la chasse aux trésors !');
const content = await readFile('input.txt', { encoding: 'utf8' });
console.log('Lecture des données');

let map;
let mountainsArray = [];
let treasursArray = [];
let adventurersArray = [];

// Read the input file and split it in arrays (Moutains, Treasurs, Adventurers)
content.split('\r\n').forEach(l => {

    //Check if each line match the data model
    if(l.match(inputRegex)) {

        const data = l.replaceAll(' ', '').split('-');
        switch(data[0]) {
            case 'C':
                map = { length: parseInt(data[1]), height: parseInt(data[2]) };
                break;
            case 'M':
                mountainsArray.push(new Mountain(parseInt(data[1]), parseInt(data[2])));
                break;
            case 'T':
                treasursArray.push(new Treasur(parseInt(data[1]), parseInt(data[2]), parseInt(data[3])));
                break;
            case 'A':
                adventurersArray.push(new Adventurer(data[1], parseInt(data[2]), parseInt(data[3]), data[4], data[5]));
                break;
            default:
                break;
        }
    }
});

console.log('Calcul des données en cours...');
//Determine the maximum number of rounds based on the adventurer with the longest movement set
const numberOfRound = Math.max(...adventurersArray.map(a => a.movement.length));
let i = 0;


while(i < numberOfRound) {
    adventurersArray.forEach(a => {
        if(a.movement[i] === 'A') {
            const { long , lat } = calculateNewCoordinates(a.long, a.lat, a.orientation);
            if(isDestinationAvailable(map, mountainsArray, adventurersArray, long, lat)) {
                a.setNewCoordinates(long, lat);
                
                treasursArray.forEach(t => {
                    if(t.long === a.long && t.lat === a.lat) {
                        t.substractTreasur();
                        a.addTreasur();
                    }
                });

                //Clean the treasurs array to remove Treasurs with remaining value at 0
                treasursArray = treasursArray.filter( t => t.number !== 0);
            }
        } else {
            a.orientation = updateOrientation(a.orientation, a.movement[i]);
        }
    })
    i++;
}

console.log('Impression des données');
const outputContent = resultOutput(map, mountainsArray, treasursArray, adventurersArray);

await writeFile('output.txt', outputContent, { flag: 'a' });
console.log('Fin de la chasse aux trésors, merci d\'avoir participé !');