import { BinarySearchTree } from './binary-tree';

interface node<T>{
  value: T;
  left?: node<T>;
  right?: node<T>;
}

class BreadthFirstSearch extends BinarySearchTree<number>{
  public breadthFirstSearch(){
    let node = this.root;
    let data: number[] = [];
    let queue: node<number>[] = [];
    queue.push(node);

    while(queue.length){
      node = queue.shift();
      data.push(node.value);

      if(node.left!==null) queue.push(node.left);
      if(node.right!==null) queue.push(node.right);
    }
    return data;
  }
}

let tree = new BreadthFirstSearch();

tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

console.log(tree.breadthFirstSearch());