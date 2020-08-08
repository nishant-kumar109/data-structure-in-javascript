class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){

        var newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this;
        }

        var current = this.root;

        while(true){

            if(value === current.value) return 'the no allready exist';

            if(value < current.value){

                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    search(value){
      if(this.root == null) return false
      let current = this.root
      let found = false
      while(current && !found){
          if(value < current.value){
              current = current.left
          }else if(value > current.value){
              current = current.right;
          }else{
              found = true
          }
      }
      if(!found) return false
      return current

    }

//     ==================== tree traversel ================== 

    BFS(){
        let node = this.root;
        let queue = [];
        let data = [];
        queue.push(node)

        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)

        }
        return data
    }

    DFSpreOrder(){
        let data = []
        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)

        }
        traverse(this.root)
        return data

    }

    DFSpostOrder(){
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
         traverse(this.root)
        return data
    }
    
    DFSinOrder(){
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
            
        }
         traverse(this.root)
        return data
    }

}


//      10
//   6     15
// 3  8       20

// queue = [ 15]
// fifo
// visiting = [10, 6]



// [10, 6, 15, 3, 8, 20]

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree)
console.log('\n')

console.log('breadth first dearch(BFS) ', tree.BFS())
console.log('\n')

console.log('DFS pre order ',tree.DFSpreOrder())
console.log('DFS post order ',tree.DFSpostOrder())
console.log('DFS in order ',tree.DFSinOrder())
console.log('\n')
