"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MergeSort {
    sort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        const merge = (leftArr, rightArr) => {
            const result = [];
            let leftIndex = 0;
            let rightIndex = 0;
            while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
                if (leftArr[leftIndex] < rightArr[rightIndex]) {
                    result.push(leftArr[leftIndex]);
                    leftIndex++;
                }
                else {
                    result.push(rightArr[rightIndex]);
                    rightIndex++;
                }
            }
            const remainingLeft = leftArr.slice(leftIndex);
            const remainingRight = rightArr.slice(rightIndex);
            return result.concat(remainingLeft).concat(remainingRight);
        };
        const sortedLeft = this.sort(left);
        const sortedRight = this.sort(right);
        return merge(sortedLeft, sortedRight);
    }
}
exports.default = MergeSort;
