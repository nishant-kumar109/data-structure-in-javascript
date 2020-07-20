class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode =  new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
        
    }
    
    pop(){
        if(!this.first) return null
        var temp = this.first

        if(this.first == this.last){
            this.last = null
        }
        
        this.first = this.first.next
        this.size--
        return temp.value

    }

}


let stack = new Stack()
stack.push('first')
stack.push('second')
stack.push('third')
console.log(stack)
// =======================
let popedNode0 = stack.pop()
console.log('poped_node: ',popedNode0)
console.log(stack)

let popedNode1 = stack.pop()
console.log('poped_node: ',popedNode1);
console.log(stack)

let popedNode2 = stack.pop()
console.log('poped_node: ',popedNode2);
console.log(stack)



