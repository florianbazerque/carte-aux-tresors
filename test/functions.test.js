import { map, mountainsArray, adventurersArray, expectedEndResult, treasursArray } from "./data";
import { updateOrientation, calculateNewCoordinates, isDestinationAvailable, resultOutput } from "../helpers/functions";

describe('functions.js', () => {

    test('UpdateOrientation returns N when given (\'O\',\'D\') parameters', () => {
        expect(updateOrientation('O','D')).toBe('N');
    })
    
    test('calculateNewCoordinates returns the correct values', () => {
        expect(calculateNewCoordinates(3, 4, 'N')).toEqual({long: 3, lat: 3});
    })
    
    test('isDestinationAvailable returns true when the path is clear', () => {
        expect(isDestinationAvailable(map, mountainsArray, adventurersArray, 2, 1)).toBeTruthy();
    }) 

    test('isDestinationAvailable returns false when the destination is not clear', () => {
        expect(isDestinationAvailable(map, mountainsArray, adventurersArray, 2, 2)).toBeFalsy();
    }) 

    test('isDestinationAvailable returns false when the destination is out of bound', () => {
        expect(isDestinationAvailable(map, mountainsArray, adventurersArray, 3, 5)).toBeFalsy();
    }) 

    test('resultOutput should return the final information', () => {
        expect(resultOutput(map, mountainsArray, treasursArray, adventurersArray)).toBe(expectedEndResult);
    })
})


