"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quickSort_1 = __importDefault(require("../algorithms/quickSort"));
const countSort_1 = __importDefault(require("../algorithms/countSort"));
const bubbleSort_1 = __importDefault(require("../algorithms/bubbleSort"));
// Sorter class definition
class Sorter {
    constructor() {
        // Initialize instances of sorting algorithms
        this.countSorter = new countSort_1.default();
        this.quickSorter = new quickSort_1.default();
        this.bubbleSorter = new bubbleSort_1.default();
    }
    // Method to perform CountSort
    performCountSort(arr) {
        return this.countSorter.sort([...arr]); // Delegate sorting to CountSort algorithm
    }
    // Method to perform QuickSort
    performQuickSort(arr) {
        return this.quickSorter.sort([...arr]); // Delegate sorting to QuickSort algorithm
    }
    // Method to perform BubbleSort
    performBubbleSort(arr) {
        return this.bubbleSorter.sort([...arr]); // Delegate sorting to BubbleSort algorithm
    }
}
exports.default = Sorter; // Export the Sorter class
