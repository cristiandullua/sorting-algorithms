import Sorter from './utils/sorter';
import readline from 'readline';

// Custom error class for invalid input handling
class InvalidInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidInputError';
  }
}

const sorter = new Sorter(); // Instantiate the Sorter class

const rl = readline.createInterface({ // Create readline interface
  input: process.stdin,
  output: process.stdout,
});

const measureTime = (sortingFunction: (arr: number[]) => number[], arr: number[]): number => {
  // Function to measure sorting algorithm execution time
  const startTime: number = Date.now();
  sortingFunction(arr);
  const endTime: number = Date.now();
  return endTime - startTime;
};

const generateRandomArray = (size: number): number[] => {
  // Function to generate a random array of unique numbers
  const arr: number[] = [];
  const set: Set<number> = new Set(); // Using a Set to track unique numbers

  while (set.size < size) {
    const randomNumber: number = Math.floor(Math.random() * size); // Generating random numbers (adjust range if needed)
    if (!set.has(randomNumber)) {
      set.add(randomNumber);
      arr.push(randomNumber);
    }
  }

  return arr; // Returning the generated random array
};

const displaySortingTimes = (size: number): void => {
  // Function to display sorting times for various sorting algorithms
  const randomArray: number[] = generateRandomArray(size);
  const countSortTime: number = measureTime(sorter.performCountSort.bind(sorter), [...randomArray]);
  const quickSortTime: number = measureTime(sorter.performQuickSort.bind(sorter), [...randomArray]);
  const bubbleSortTime: number = measureTime(sorter.performBubbleSort.bind(sorter), [...randomArray]);

  // Displaying the array size and sorting algorithm execution times
  console.log(`Array size: ${size}`);
  console.log(`Count Sort Time: ${countSortTime}ms`);
  console.log(`Quicksort Time: ${quickSortTime}ms`);
  console.log(`Bubble Sort Time: ${bubbleSortTime}ms`);
  console.log('------------------------');
};

const exampleArraySizes: number[] = [10000, 20000, 30000, 40000, 50000];

// Display examples for various array sizes
exampleArraySizes.forEach((size: number) => {
  displaySortingTimes(size);
});

const getUserInput = (): void => {
  // Function to get user input for the number of items to process
  rl.question('Enter the number of items to process: ', (input: string) => {
    try {
      const numberOfItems: number = parseInt(input);

      if (isNaN(numberOfItems) || numberOfItems <= 0) {
        throw new InvalidInputError('Please enter a valid positive number for the items count.');
      }

      if (numberOfItems > 1000000) {
        throw new InvalidInputError('The number is too large. Please enter a smaller number.');
      }

      displaySortingTimes(numberOfItems);
      rl.close();

    } catch (error) {
      if (error instanceof InvalidInputError) {
        console.error('Invalid Input Error:', error.message);
        getUserInput(); // Recursive call to get valid input after displaying error
      } else {
        console.error('An unexpected error occurred:', error);
        rl.close();
      }
    }
  });
};

getUserInput(); // Initial function call to start the user input process