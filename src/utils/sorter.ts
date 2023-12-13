import QuickSort from '../algorithms/quickSort';
import MergeSort from '../algorithms/mergeSort';
import bubbleSort from '../algorithms/bubbleSort';

class Sorter {
  private quickSorter: QuickSort;
  private mergeSorter: MergeSort;

  constructor() {
    this.quickSorter = new QuickSort();
    this.mergeSorter = new MergeSort();
  }

  public performQuickSort(arr: number[]): number[] {
    return this.quickSorter.sort([...arr]);
  }

  public performMergeSort(arr: number[]): number[] {
    return this.mergeSorter.sort([...arr]);
  }

  public performBubbleSort(arr: number[]): number[] {
    return bubbleSort([...arr]);
  }
}

export default Sorter;
