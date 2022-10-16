    //* The Node Class that will create the linked list nodes.
class Node {
    //* The constructer function sets the value of the next and value to null.
    constructor(v){
        this.next = null
        this.value = v
    }
}

class LinkedList {

    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(v){
        const newNode = new Node(v)
        if(this.head === null){
            newNode.next = null
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            newNode.next = null
            this.tail = newNode
        }
        this.length++;
    }

    prepend(v){
        const newNode = new Node(v)
        if(this.head === null){
            newNode.next = null 
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    at(index){
        if(this.tail === null)
        return null
        if(index === 0)
            return this.head.value
        else if(index === -1)
            return this.tail.value
        else if(index > 0){
            let current = this.head
            for(let i = 0 ; i < index ; i++)
                current = current.next
            return current.value
        }
        return null
    }

    pop(){
        if(this.head === null)
            return null
        let current = this.head
        for(let i = 0 ; i < this.length-2; i++)
            current = current.next
        delete this.tail
        this.tail = current
        this.tail.next = null
    }    

    contains(value){
        let current = this.head
        while(current !== null){
            if(current.value === value)
                return true
            current = current.next
        }
        return null
    }

    toString(){
        let full = ''
        let current = this.head
        while(current !== null){
            full += `(${current.value})-> `
            current = current.next
        }
        full += `null`
        return full
    }

    find(value){
        let index = 0 
        let current = this.head
        while(current !== null){
            if(current.value === value)
                return index
            index++
            current = current.next
        }
        return null
    }
}


