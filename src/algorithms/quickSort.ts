// QuickSort class definition
class QuickSort {
  // Method to sort an array of numbers using Quick Sort algorithm
  sort(arr: number[]): number[] {
    // Base case: if array length is 0 or 1, return the array itself
    if (arr.length <= 1) {
      return arr;
    }

    // Select the first element as the pivot
    const pivot = arr[0];
    const left = [];
    const right = [];

    // Partition the array into two sub-arrays based on the pivot
    for (let i = 1; i < arr.length; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    // Recursively sort the left and right sub-arrays
    const sortedLeft = this.sort(left);
    const sortedRight = this.sort(right);

    // Combine the sorted left sub-array, pivot, and sorted right sub-array
    return [...sortedLeft, pivot, ...sortedRight];
  }
}

export default QuickSort; // Export the QuickSort class