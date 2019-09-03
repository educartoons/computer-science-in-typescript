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
      if (!this.head) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
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

  public removeFistNode(): T | undefined {
    if (this.head) {
      const nodeRemoved = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
      return nodeRemoved;
    }
    return undefined;
  }

  public removeLastNode(): T | undefined {
    if (this.tail) {
      const nodeRemoved = this.tail.value;
      this.tail = this.tail.prev;
      if (!this.tail) {
        this.head = undefined;
      } else {
        this.tail.next = undefined;
      }
      return nodeRemoved;
    }
    return undefined;
  }

  public removeNodeWithValue(value: T): T | undefined {
    let current = this.head;
    if (this.head) {
      let result = false;
      while (current) {
        if (current.value === value) {
          // if the list has just one node
          if (this.head === this.tail) {
            this.head = undefined;
            this.tail = undefined;
          } else {
            // if the target is the head
            if (this.head === current) {
              this.head = current.next;
              this.head.prev = undefined;
            } else {
              if (this.tail === current) {
                this.tail == current.prev;
                this.tail.next = undefined;
              } else {
                const prev = current.prev;
                const next = current.next;
                prev.next = next;
                next.prev = prev;
              }
            }
          }
          result = true;
        }
        current = current.next;
      }
      if (result) {
        return value;
      } else {
        return undefined;
      }
    }

    return undefined;
  }

  public search(value: T): boolean {
    let current = this.head;
    let result: boolean = false;
    while (current) {
      if (current.value === value) {
        result = true;
        break;
      }
      current = current.next;
    }
    return result;
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
list2.add(8);
list2.add(32);
list2.add(7);

console.log(Array.from(list2.values()));

console.log(list2.removeNodeWithValue(8));

console.log(Array.from(list2.values()));

console.log(list2.removeNodeWithValue(1));

console.log(Array.from(list2.values()));

console.log(list2.removeNodeWithValue(7));

console.log(Array.from(list2.values()));

console.log(list2.removeLastNode());
console.log(list2.removeLastNode());
console.log(list2.removeLastNode());

console.log(Array.from(list2.values()));

console.log(list2.removeNodeWithValue(10));

console.log(Array.from(list2.values()));

// console.log(list2.removeLastNode());

// console.log(Array.from(list2.values()));

// console.log(list2.search(32));
// console.log(list2.search(1));
// console.log(list2.search(2));
