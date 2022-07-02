//Maciej Michalak Numer albumu : 19510 Grupa : TZI04IS2

//1

function validate(force, acceleration, mass) {
  return mass * acceleration == force;   
}

console.log(validate(100, 10, 10))
console.log(validate(110, 10, 10))


//2

const button = document.querySelector("#button1");
function Funkcja(){
  button.textContent = "Clicked"
}
button.addEventListener("click", Funkcja)


//3

var tablica = [1,2,3,4,5];

var dodawanie = tablica.map(function(x) {
    return x + 1;
});

function wieksze_rowne(y) {
  return y >= 3;
}

var filtered = dodawanie.filter(wieksze_rowne);
console.log(filtered)
