interface node<T>{
  value: T;
  left?: node<T>;
  right?: node<T>;
}

class BinarySearchTree<T>{
  private root? : node<T> = undefined;

  // Insert a node in the tree
  public insert(value: T){
    if(this.root===undefined){
      this.root = this.forNode(value);
    }else{
      let current = this.root;
      while(current){
        if(value<current.value){
          if(current.left===null){
            current.left = this.forNode(value);
            current = undefined;
          }else{
            current = current.left;
          }
        }else{
          if(value>current.value){
            if(current.right===null){
              current.right = this.forNode(value)
              current = undefined;
            }else{
              current = current.right;
            }
          }else{
            current = undefined;
          }
          
        }
      }
    }
  }

  // find a value in tree

  public find(value: T){

    if(this.root===undefined) return false;

    let current = this.root;

    while(current){
      if(current.value===value){
        return value;
      }else{
        if(value<current.value){
          current = current.left;
        }else{
          current = current.right;
        }
      }
    }

    return false;
  }

  public show(){
    console.log(this);
  }

  private forNode(value: T){
    return {
      value,
      left: null,
      right: null
    }
  }

}

let tree = new BinarySearchTree();

tree.insert(20);
tree.insert(15);
tree.insert(5);
tree.insert(4);
tree.insert(3);
tree.insert(7);
tree.insert(21);
tree.insert(45);
tree.show();
console.log(tree.find(7))
console.log(tree.find(1));