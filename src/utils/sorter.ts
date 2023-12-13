import QuickSort from '../algorithms/quickSort';
import MergeSort from '../algorithms/mergeSort';

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
}

export default Sorter;