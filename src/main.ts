import Sorter from './utils/sorter';

const sorter = new Sorter();

const generateRandomArray = (size: number): number[] => {
  const arr = [];
  const set = new Set(); // Using a Set to track unique numbers

  while (set.size < size) {
    const randomNumber = Math.floor(Math.random() * 100000); // Generating random numbers (adjust range if needed)
    if (!set.has(randomNumber)) {
      set.add(randomNumber);
      arr.push(randomNumber);
    }
  }

  return arr;
};

const measureTime = (sortingFunction: (arr: number[]) => number[], arr: number[]): number => {
  const startTime = Date.now();
  sortingFunction(arr);
  const endTime = Date.now();
  return endTime - startTime;
};

const arraySizes = [10000, 20000, 30000, 40000, 50000]; // Different array sizes for testing

arraySizes.forEach((size) => {
  const randomArray = generateRandomArray(size);
  const quickSortTime = measureTime(sorter.performQuickSort.bind(sorter), [...randomArray]);
  const mergeSortTime = measureTime(sorter.performMergeSort.bind(sorter), [...randomArray]);
  const bubbleSortTime = measureTime(sorter.performBubbleSort.bind(sorter), [...randomArray]);

  console.log(`Array size: ${size}`);
  console.log(`Quicksort Time: ${quickSortTime}ms`);
  console.log(`Mergesort Time: ${mergeSortTime}ms`);
  console.log(`Bubble Sort Time: ${bubbleSortTime}ms`);
  console.log('------------------------');
});
