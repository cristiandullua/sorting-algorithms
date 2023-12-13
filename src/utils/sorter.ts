import QuickSort from '../algorithms/quickSort';
import CountSort from '../algorithms/countSort';
import BubbleSort from '../algorithms/bubbleSort';

// Sorter class definition
class Sorter {
  private countSorter: CountSort; // Instance of CountSort class
  private quickSorter: QuickSort; // Instance of QuickSort class
  private bubbleSorter: BubbleSort; // Instance of BubbleSort class

  constructor() {
    // Initialize instances of sorting algorithms
    this.countSorter = new CountSort();
    this.quickSorter = new QuickSort();
    this.bubbleSorter = new BubbleSort();
  }

  // Method to perform CountSort
  public performCountSort(arr: number[]): number[] {
    return this.countSorter.sort([...arr]); // Delegate sorting to CountSort algorithm
  }

  // Method to perform QuickSort
  public performQuickSort(arr: number[]): number[] {
    return this.quickSorter.sort([...arr]); // Delegate sorting to QuickSort algorithm
  }

  // Method to perform BubbleSort
  public performBubbleSort(arr: number[]): number[] {
    return this.bubbleSorter.sort([...arr]); // Delegate sorting to BubbleSort algorithm
  }
}

export default Sorter; // Export the Sorter class
