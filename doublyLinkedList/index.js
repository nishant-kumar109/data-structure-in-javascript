// https://www.algoexpert.io/data-structures

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){

        var newNode = new Node(val);

//       console.log(newNode)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
//         console.log(this)
        return this;
    }

  pop(){
      if(!this.head) return null;
      let popedNode = this.tail;

      if(this.length === 1){
          this.head = null;
          this.tail = null;
      }else{
          this.tail = popedNode.prev
          popedNode.prev = null;
      }
      this.length--;
      return popedNode
  }
  
  shift(){
    if(this.length === 0) return undefined
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.head = oldHead.next;
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead;
  }
  
  unshift(val){
    let newNode = new Node(val);
    if(this.lenght === 0){
      this.head = newNode
      this.tail = newNode
    }else{
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode

    }
    this.length++
    return this

  }
  get(index){
    if(index < 0 || index >= this.length) return null;

    var mid = Math.floor((this.length)/2);

    if(index <= mid){
    console.log('travelling from head')
    var count = 0
    var currentNode = this.head

      while(count !== index){
      currentNode = currentNode.next
      count++
    }
    return currentNode

    }else{
      console.log('travelling from tail')
      var count = this.length-1

      var currentNode = this.tail

      while(count !== index){
        currentNode = currentNode.prev;
        count--
      }
      return currentNode;
    }
    
  }

  set(index, val){
    let foundNode = this.get(index)
    if(foundNode !== null){
      foundNode.val = val
      return true
    }
    return false

  }

  insert(index, val){
    if(index < 0 || index > this.length) return null
    if(index === 0) return this.unshift(val)
    if(index === this.length) return this.push(val)
    var newNode = new Node(val)
    var beforeNode = this.get(index-1)
    var afterNode = beforeNode.next
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    beforeNode.next = newNode
    this.length++
    return true
  }

  remove(index){
    if(index<0 || index>this.length) return 'plz enter correct index'

    if(index ===0 ) return this.shift()

    if(index === this.length-1) return this.pop()

    let removedNode = this.get(index);

    removedNode.next.prev = removedNode.prev
    
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }

}
        
//         h              t
//         30 <-10 -> 20->40
//            <-   <-   <-

let dll = new DoublyLinkedList()
dll.push(30)
dll.push(10)
dll.push(20)
dll.push(40)

console.log(dll)

let newDoublyLinkedList = dll.pop()
console.log(newDoublyLinkedList)

let shiftDoublyLinkedList = dll.shift();
console.log(shiftDoublyLinkedList)

dll.unshift('2020 corona');
console.log(dll)

let getNode = dll.get(2)
console.log('get node',getNode)


let setNode = dll.set(1, 'hello set')
console.log(dll)
console.log(setNode)

let insertNode = dll.insert(1, 'insering Node')
console.log('inserted',insertNode)

let removeNode = dll.remove(1)
console.log('removed', removeNode)

