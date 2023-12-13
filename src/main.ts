import Sorter from './utils/sorter'; // Importing the Sorter class

const sorter = new Sorter(); // Creating an instance of the Sorter class

// Function to generate a random array of unique numbers
const generateRandomArray = (size: number): number[] => {
  const arr = [];
  const set = new Set(); // Using a Set to track unique numbers

  // Generating random unique numbers until the desired array size is reached
  while (set.size < size) {
    const randomNumber = Math.floor(Math.random() * 100000); // Generating random numbers (adjust range if needed)
    if (!set.has(randomNumber)) {
      set.add(randomNumber);
      arr.push(randomNumber);
    }
  }

  return arr; // Returning the generated random array
};

// Function to measure the execution time of a sorting function on a given array
const measureTime = (sortingFunction: (arr: number[]) => number[], arr: number[]): number => {
  const startTime = Date.now(); // Recording the start time of the sorting operation
  sortingFunction(arr); // Executing the sorting function
  const endTime = Date.now(); // Recording the end time of the sorting operation
  return endTime - startTime; // Calculating and returning the time taken for sorting
};

const arraySizes = [10000, 20000, 30000, 40000, 50000, 100000]; // Different array sizes for testing

// Iterating through various array sizes
arraySizes.forEach((size) => {
  const randomArray = generateRandomArray(size); // Generating a random array of the current size
  const countSortTime = measureTime(sorter.performCountSort.bind(sorter), [...randomArray]); // Measuring Count Sort time
  const quickSortTime = measureTime(sorter.performQuickSort.bind(sorter), [...randomArray]); // Measuring Quick Sort time
  const bubbleSortTime = measureTime(sorter.performBubbleSort.bind(sorter), [...randomArray]); // Measuring Bubble Sort time

  // Displaying the array size and sorting algorithm execution times
  console.log(`Array size: ${size}`);
  console.log(`Count Sort Time: ${countSortTime}ms`);
  console.log(`Quicksort Time: ${quickSortTime}ms`);
  console.log(`Bubble Sort Time: ${bubbleSortTime}ms`);
  console.log('------------------------');
});
