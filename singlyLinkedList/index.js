class Node {
    constructor(val){
        this.val = val;
        this.next = 0
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current 
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;

        var currentHead = this.head;

        this.head = currentHead.next;

        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
   
   unshift(val){
       let newNode = new Node(val)
       if(!this.head){
           this.head = newNode;
           this.tail = this.head;
       }else{
           newNode.next = this.head;
           this.head = newNode
       }

       this.length++;
       return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

}


var list = new SinglyLinkedList()

list.push("HELLO")
list.push("GOODBYE")
list.push('corona')
list.push('!')
console.log(list)

let newList = list.pop()
console.log(newList)

let shiftList = list.shift();
console.log(shiftList)

list.unshift('2020 corona');
console.log(list)

let getNode = list.get(2)
console.log('get node',getNode)


let setNode = list.set(1, 'hello set')
console.log(list)
console.log(setNode)

let insertNode = list.insert(1, 'insering Node')
console.log('inserted',insertNode)

let removeNode = list.remove(1)
console.log('removed', removeNode)