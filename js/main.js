
const box = document.getElementById("box");






for (let i = 1; i <= 100; i++) {
    const newSquare = document.createElement("div");
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz")
        newSquare.innerHTML =  "FizzBuzz"
        newSquare.classList.add("bg-danger");


    }
    else if (i % 3 == 0) {
        console.log("Fizz")
        newSquare.innerHTML =  "Fizz"
        newSquare.classList.add("bg-success");

    }
    else if (i % 5 == 0){
        console.log("Buzz")
        newSquare.innerHTML =  "Buzz"
        newSquare.classList.add("bg-warning");

    }
    else {
        console.log(i)
        newSquare.innerHTML =  i
        newSquare.classList.add("bg-primary");

    }
    newSquare.classList.add("squareBox");
    box.append(newSquare);
}