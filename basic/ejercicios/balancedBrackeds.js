// Creating Stack class for generic use
class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top] = element;
        this.top += 1;
    }

    peek() {
        return this.data[this.top -1 ];
    }

    isEmpty() {
        return this.top === 0;
    }

    pop() {
        if( this.isEmpty() === false ) {
           this.top = this.top -1;
           return this.data.pop();
         }
    }
}



// Complete the isBalanced function below.
function isBalanced(s) {
    var openers = ["(", "{", "["]
    var closers = [")", "}", "]"]
    var search = new Stack();
    for(var c in s){
        if (openers.includes(s[c])){
            search.push(s[c])
        } else {
            if( search.isEmpty){
                var current = search.peek()
                if(openers.indexOf(current) == closers.indexOf(s[c])){
                    search.pop()
                } else {
                    return "NO";
                }
            } else {
                return "NO";
            }
        }
    }
    if(search.isEmpty()){
        return "YES";
    }
    return "NO";
}

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
