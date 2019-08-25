// Linked List is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next

interface LinkedListNode<T> {
  value: T;
  next?: LinkedListNode<T>;
}

class LinkedList<T> {
  private head?: LinkedListNode<T> = undefined;
  private tail?: LinkedListNode<T> = undefined;

  public add(value: T): void {
    const node = this.forgeNode(value);

    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  public remove(): T | undefined {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = undefined;
      }
      return value;
    }
  }

  // Generator function
  public *values() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  private forgeNode(value: T): LinkedListNode<T> {
    return { value, next: null };
  }
}

// test

const list = new LinkedList<number>();
list.add(1);
list.add(10);
list.add(5);
list.add(32);

console.log(list);

console.log(Array.from(list.values()));
