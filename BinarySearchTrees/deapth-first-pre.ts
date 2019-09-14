import { BinarySearchTree } from './bst';

interface node<T>{
  value: T;
  left?: node<T>;
  right?: node<T>;
}

class DeapthFirstPreOrder extends BinarySearchTree<number>{
  public deapthFirstPre(){
    let node = this.root;
    if(node===undefined) return false;

    let data: number[] = []; 

    this.traverse(node, data);

    return data;
    
  }

  private traverse(node: node<number>, data: number[]){
    data.push(node.value);
    if(node.left!==null) this.traverse(node.left, data);
    if(node.right!==null) this.traverse(node.right, data);
  }
}

let tree = new DeapthFirstPreOrder();

tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

console.log(tree.deapthFirstPre());

