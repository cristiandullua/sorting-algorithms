"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quickSort_1 = __importDefault(require("../algorithms/quickSort"));
const mergeSort_1 = __importDefault(require("../algorithms/mergeSort"));
class Sorter {
    constructor() {
        this.quickSorter = new quickSort_1.default();
        this.mergeSorter = new mergeSort_1.default();
    }
    performQuickSort(arr) {
        return this.quickSorter.sort([...arr]);
    }
    performMergeSort(arr) {
        return this.mergeSorter.sort([...arr]);
    }
}
exports.default = Sorter;
