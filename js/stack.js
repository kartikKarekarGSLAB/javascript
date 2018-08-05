var stack = {    
    init : function () {
        var push = document.querySelector("#push");
        var pop = document.querySelector("#pop");
        
        push.addEventListener("click",stack.push);
        pop.addEventListener("click",stack.pop)
    },
    push : function () {
    // returns a random integer from 1 to 10
    var number = Math.floor(Math.random() * 10) + 1;  
        
    },
    pop : function () {
    }
}
window.addEventListener("load", signup.init, false);