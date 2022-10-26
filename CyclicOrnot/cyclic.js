class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
function isCircular( head) {

    if (head == null)
        return true;

     node = head.next;

    while (node != null && node != head)
        node = node.next;


    return (node == head);
}


function newNode(data) {
    temp = new Node();
    temp.data = data;
    temp.next = null;
    return temp;
}
head = newNode(1);
head.next = newNode(2);
head.next.next = newNode(3);
head.next.next.next = newNode(4);
console.log(isCircular(head))
head.next.next.next.next = head;
console.log(isCircular(head))