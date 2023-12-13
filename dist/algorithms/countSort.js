"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CountSort class definition
class CountSort {
    // Method to sort an array of numbers using Counting Sort algorithm
    sort(arr) {
        // Check if the array is empty, return an empty array if so
        if (arr.length === 0) {
            return [];
        }
        // Find the maximum and minimum values in the array
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        // Calculate the range of values in the array
        const range = max - min + 1;
        // Initialize arrays for counting and output
        const count = new Array(range).fill(0);
        const output = new Array(arr.length);
        // Count the occurrences of each element in the input array
        for (let i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
        }
        // Modify the count array to store the positions of elements in the output
        for (let i = 1; i < range; i++) {
            count[i] += count[i - 1];
        }
        // Place the elements in sorted order in the output array
        for (let i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
        }
        // Return the sorted output array
        return output;
    }
}
exports.default = CountSort; // Export the CountSort class
