"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = __importDefault(require("./utils/sorter"));
const sorter = new sorter_1.default();
const generateRandomArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100000)); // Generating random numbers (adjust range if needed)
    }
    return arr;
};
const measureTime = (sortingFunction, arr) => {
    const startTime = Date.now();
    sortingFunction(arr);
    const endTime = Date.now();
    return endTime - startTime;
};
const arraySizes = [1000, 10000, 100000, 1000000, 10000000]; // Different array sizes for testing
arraySizes.forEach((size) => {
    const randomArray = generateRandomArray(size);
    const quickSortTime = measureTime(sorter.performQuickSort.bind(sorter), [...randomArray]);
    const mergeSortTime = measureTime(sorter.performMergeSort.bind(sorter), [...randomArray]);
    console.log(`Array size: ${size}`);
    console.log(`Quicksort Time: ${quickSortTime}ms`);
    console.log(`Mergesort Time: ${mergeSortTime}ms`);
    console.log('------------------------');
});
