import Sorter from './utils/sorter';
import readline from 'readline';

class InvalidInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidInputError';
  }
}

const sorter = new Sorter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to measure sorting algorithm execution time
const measureTime = (sortingFunction: (arr: number[]) => number[], arr: number[]) => {
  const startTime = Date.now();
  sortingFunction(arr);
  const endTime = Date.now();
  return endTime - startTime;
};

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

const displaySortingTimes = (size: number) => {
  const randomArray = generateRandomArray(size);
  const countSortTime = measureTime(sorter.performCountSort.bind(sorter), [...randomArray]);
  const quickSortTime = measureTime(sorter.performQuickSort.bind(sorter), [...randomArray]);
  const bubbleSortTime = measureTime(sorter.performBubbleSort.bind(sorter), [...randomArray]);

  // Displaying the array size and sorting algorithm execution times
  console.log(`Array size: ${size}`);
  console.log(`Count Sort Time: ${countSortTime}ms`);
  console.log(`Quicksort Time: ${quickSortTime}ms`);
  console.log(`Bubble Sort Time: ${bubbleSortTime}ms`);
  console.log('------------------------');
};

const exampleArraySizes = [10000, 20000, 30000, 40000, 50000];

// Displaying examples for various array sizes
exampleArraySizes.forEach((size) => {
  displaySortingTimes(size);
});

rl.question('Enter the number of items to process: ', (input) => {
  try {
    const numberOfItems = parseInt(input);

    if (isNaN(numberOfItems) || numberOfItems <= 0) {
      throw new InvalidInputError('Please enter a valid positive number for the items count.');
    }

    if (numberOfItems > 1000000) {
      throw new InvalidInputError('The number is too large. Please enter a smaller number.');
    }

    displaySortingTimes(numberOfItems);

  } catch (error) {
    if (error instanceof InvalidInputError) {
      console.error('Invalid Input Error:', error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  } finally {
    rl.close();
  }
});
