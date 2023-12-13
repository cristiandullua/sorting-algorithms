"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quickSort_1 = __importDefault(require("../algorithms/quickSort"));
const countSort_1 = __importDefault(require("../algorithms/countSort"));
const bubbleSort_1 = __importDefault(require("../algorithms/bubbleSort"));
class Sorter {
    constructor() {
        this.countSorter = new countSort_1.default();
        this.quickSorter = new quickSort_1.default();
        this.bubbleSorter = new bubbleSort_1.default();
    }
    performCountSort(arr) {
        return this.countSorter.sort([...arr]);
    }
    performQuickSort(arr) {
        return this.quickSorter.sort([...arr]);
    }
    performBubbleSort(arr) {
        return this.bubbleSorter.sort([...arr]);
    }
}
exports.default = Sorter;
