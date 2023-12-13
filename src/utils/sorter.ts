import QuickSort from '../algorithms/quickSort';
import CountSort from '../algorithms/countSort';
import BubbleSort from '../algorithms/bubbleSort';

class Sorter {
  private countSorter: CountSort;
  private quickSorter: QuickSort;
  private bubbleSorter: BubbleSort;

  constructor() {
    this.countSorter = new CountSort();
    this.quickSorter = new QuickSort();
    this.bubbleSorter = new BubbleSort();
  }

  public performCountSort(arr: number[]): number[] {
    return this.countSorter.sort([...arr]);
  }

  public performQuickSort(arr: number[]): number[] {  
    return this.quickSorter.sort([...arr]);
  }

  public performBubbleSort(arr: number[]): number[] {
    return this.bubbleSorter.sort([...arr]);
  }
}

export default Sorter;