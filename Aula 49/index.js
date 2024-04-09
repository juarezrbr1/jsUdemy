// Declaração de função (Function Hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();