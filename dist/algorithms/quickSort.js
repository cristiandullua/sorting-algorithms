"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuickSort {
    sort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = arr[0];
        const left = [];
        const right = [];
        for (let i = 1; i < arr.length; i++) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
        const sortedLeft = this.sort(left);
        const sortedRight = this.sort(right);
        return [...sortedLeft, pivot, ...sortedRight];
    }
}
exports.default = QuickSort;
