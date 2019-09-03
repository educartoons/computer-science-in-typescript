interface LinkedNode<T> {
  value: T;
  next?: LinkedNode<T>;
  prev?: LinkedNode<T>;
}

class DoublyLinkedList<T> {
  private head?: LinkedNode<T> = undefined;
  private tail?: LinkedNode<T> = undefined;

  public add(value: T): void {
    const node = this.forgeNode(value);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }

  public forgeNode(value: T): LinkedNode<T> {
    return { value, prev: null, next: null };
  }

  public *values() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

const list2 = new DoublyLinkedList<number>();
list2.add(1);
list2.add(10);
list2.add(5);
list2.add(32);

console.log(Array.from(list2.values()));
