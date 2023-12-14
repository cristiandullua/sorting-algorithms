"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = __importDefault(require("./utils/sorter"));
const readline_1 = __importDefault(require("readline"));
class InvalidInputError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidInputError';
    }
}
const sorter = new sorter_1.default();
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const measureTime = (sortingFunction, arr) => {
    const startTime = Date.now();
    sortingFunction(arr);
    const endTime = Date.now();
    return endTime - startTime;
};
const generateRandomArray = (size) => {
    const arr = [];
    const set = new Set();
    while (set.size < size) {
        const randomNumber = Math.floor(Math.random() * 100000);
        if (!set.has(randomNumber)) {
            set.add(randomNumber);
            arr.push(randomNumber);
        }
    }
    return arr;
};
const displaySortingTimes = (size) => {
    const randomArray = generateRandomArray(size);
    const countSortTime = measureTime(sorter.performCountSort.bind(sorter), [...randomArray]);
    const quickSortTime = measureTime(sorter.performQuickSort.bind(sorter), [...randomArray]);
    const bubbleSortTime = measureTime(sorter.performBubbleSort.bind(sorter), [...randomArray]);
    console.log(`Array size: ${size}`);
    console.log(`Count Sort Time: ${countSortTime}ms`);
    console.log(`Quicksort Time: ${quickSortTime}ms`);
    console.log(`Bubble Sort Time: ${bubbleSortTime}ms`);
    console.log('------------------------');
    waitForInput(); // After displaying sorting times, prompt for new input
};
const exampleArraySizes = [10000, 20000, 30000, 40000, 50000];
exampleArraySizes.forEach((size) => {
    displaySortingTimes(size);
});
let inputTimeout;
const waitForInput = () => {
    rl.question('Enter the number of items to process: ', (input) => {
        clearTimeout(inputTimeout);
        try {
            const numberOfItems = parseInt(input);
            if (isNaN(numberOfItems) || numberOfItems <= 0) {
                throw new InvalidInputError('Please enter a valid positive number for the items count.');
            }
            if (numberOfItems > 1000000) {
                throw new InvalidInputError('The number is too large. Please enter a smaller number.');
            }
            displaySortingTimes(numberOfItems);
        }
        catch (error) {
            if (error instanceof InvalidInputError) {
                console.error('Invalid Input Error:', error.message);
                waitForInput(); // Prompt for new input after displaying the error
            }
            else {
                console.error('An unexpected error occurred:', error);
                rl.close();
            }
        }
    });
    // Set a timeout for 30 seconds
    inputTimeout = setTimeout(() => {
        rl.close();
        console.error('Input time exceeded. Please run the program again and enter a valid number within 30 seconds.');
    }, 30000);
};
waitForInput();
