"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = __importDefault(require("./utils/sorter"));
const readline_1 = __importDefault(require("readline"));
// Custom error class for invalid input handling
class InvalidInputError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidInputError';
    }
}
const sorter = new sorter_1.default(); // Instantiate the Sorter class
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const measureTime = (sortingFunction, arr) => {
    // Function to measure sorting algorithm execution time
    const startTime = Date.now();
    sortingFunction(arr);
    const endTime = Date.now();
    return endTime - startTime;
};
const generateRandomArray = (size) => {
    // Function to generate a random array of unique numbers
    const arr = [];
    const set = new Set(); // Using a Set to track unique numbers
    while (set.size < size) {
        const randomNumber = Math.floor(Math.random() * 100000); // Generating random numbers (adjust range if needed)
        if (!set.has(randomNumber)) {
            set.add(randomNumber);
            arr.push(randomNumber);
        }
    }
    return arr; // Returning the generated random array
};
const displaySortingTimes = (size) => {
    // Function to display sorting times for various sorting algorithms
    const randomArray = generateRandomArray(size);
    const countSortTime = measureTime(sorter.performCountSort.bind(sorter), [...randomArray]);
    const quickSortTime = measureTime(sorter.performQuickSort.bind(sorter), [...randomArray]);
    const bubbleSortTime = measureTime(sorter.performBubbleSort.bind(sorter), [...randomArray]);
    // Displaying the array size and sorting algorithm execution times
    console.log(`Array size: ${size}`);
    console.log(`Count Sort Time: ${countSortTime}ms`);
    console.log(`Quicksort Time: ${quickSortTime}ms`);
    console.log(`Bubble Sort Time: ${bubbleSortTime}ms`);
    console.log('------------------------');
};
const exampleArraySizes = [10000, 20000, 30000, 40000, 50000];
// Display examples for various array sizes
exampleArraySizes.forEach((size) => {
    displaySortingTimes(size);
});
const getUserInput = () => {
    // Function to get user input for the number of items to process
    rl.question('Enter the number of items to process: ', (input) => {
        try {
            const numberOfItems = parseInt(input);
            if (isNaN(numberOfItems) || numberOfItems <= 0) {
                throw new InvalidInputError('Please enter a valid positive number for the items count.');
            }
            if (numberOfItems > 1000000) {
                throw new InvalidInputError('The number is too large. Please enter a smaller number.');
            }
            displaySortingTimes(numberOfItems);
            rl.close();
        }
        catch (error) {
            if (error instanceof InvalidInputError) {
                console.error('Invalid Input Error:', error.message);
                getUserInput(); // Recursive call to get valid input after displaying error
            }
            else {
                console.error('An unexpected error occurred:', error);
                rl.close();
            }
        }
    });
};
getUserInput(); // Initial function call to start the user input process
