// A stack is an abstract data type that stores a colletion of elements, with two principal operations
// Push: adds an element to the collection
// Pop: removes the most recently added element that was not yet removed

// We use 'generics' feature of Typescript

class Stack<T> {
  private data: T[] = [];

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  size(): number {
    return this.data.length;
  }
}

// Testing

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);
