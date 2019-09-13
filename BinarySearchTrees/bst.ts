interface node<T>{
  value: T;
  left?: node<T>;
  right?: node<T>;
}

class BinarySearchTree<T>{
  private root? : node<T> = undefined;

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

tree.insert(21);

tree.show();