class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class LinkedList{
    constructor(val) {
        const newNode = new Node(val);
        this.head = newNode;
        this.tail = this.head; 
        this.lenght = 1;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.lenght++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        
        while(temp.next){
            pre = temp;
            temp = temp.next;
        } 
        this.tail = pre;
        this.tail.next = null;
        this.lenght--;
        if(this.lenght === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode; 
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.lenght++;
        return this;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.lenght--;
        this.lenght === 0 ? this.tail = null : null;
        temp.next = null;
        return temp;
    }

    get(index){
        if(index < 0 || index >= this.lenght) return null;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    set(index, val){
        let temp = this.get(index);
        if(temp){
            temp.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index === 0) return this.unshift(val);
        if(index === this.lenght) return this.push(val);
        if(index < 0 || index > this.lenght) return false;
        const newNode = new Node(val);
        let temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.lenght++;
        return true;
    }

    remove(index){
        if(index === 0) return this.shift();
        if(index === this.lenght - 1) return this.pop();
        if(index < 0 || index >= this.lenght) return undefined;
        let temp = this.get(index - 1);
        let removed = temp.next;
        temp.next = removed.next;
        this.lenght--;
        return removed;
    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for(let i = 0; i < this.lenght; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(6);
myLinkedList.set(4, 9);
myLinkedList.reverse();
console.log(myLinkedList.get(0));