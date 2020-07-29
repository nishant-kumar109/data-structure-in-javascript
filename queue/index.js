class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode =  new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode

        }else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }


    dequeue(){
        if(!this.first) return null
        let temp = this.first

        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}


let q = new Queue()
q.enqueue('first')
q.enqueue('second')
q.enqueue('third')
console.log(q)
// =======================
let dequeuedNode0 = q.dequeue()
console.log('dequeued_node: ',dequeuedNode0)
console.log(q)

let dequeuedNode1 = q.dequeue()
console.log('dequeued_node: ',dequeuedNode1);
console.log(q)

let dequeuedNode2 = q.dequeue()
console.log('dequeued_node: ',dequeuedNode2);
console.log(q)

