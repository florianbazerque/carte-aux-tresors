import { Adventurer } from "../class/adventurer";
import { Mountain } from "../class/mountain";
import { Treasur } from "../class/treasur";

export const map = { length: 3, height: 4 };
export const mountainsArray = [new Mountain(2,2)];
export const treasursArray = [new Treasur(1,2,2)];
export const adventurersArray = [new Adventurer('John', 1, 1, 'S', 'ADA')];

export const expectedEndResult = 'C - 3 - 4\nM - 2 - 2\nT - 1 - 2 - 2\nA - John - 1 - 1 - S - 0\n';