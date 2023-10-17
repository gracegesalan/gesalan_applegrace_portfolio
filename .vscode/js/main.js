// function expression

let anonFunction = function () {
    console.log('anon function called');
}

anotherFunction();

let anonFunction2 = function() {
    console.log('anon2 function called');
}();

// IIFE regular syntax
(function() {
    console.log('IIFE called');
    const userName = "Marco";
})();

console.log(userName);

// arrow syntax
(()=> {
    console.log('arrow iife called');
})();