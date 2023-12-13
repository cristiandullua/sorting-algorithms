// BubbleSort class definition
class BubbleSort {
  // Method to sort an array of numbers using Bubble Sort algorithm
  sort(arr: number[]): number[] {
    const len = arr.length;                     // Store the length of the array
    for (let i = 0; i < len; i++) {             // Outer loop for iterating through the array
      for (let j = 0; j < len - i - 1; j++) {   // Inner loop for comparison and swapping
        if (arr[j] > arr[j + 1]) {              // Check if the current element is greater than the next one
          const temp = arr[j];                  // Swap the elements if they are in the wrong order
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr; // Return the sorted array
  }
}

export default BubbleSort; // Export the BubbleSort class
