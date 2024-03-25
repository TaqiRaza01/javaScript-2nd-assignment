
// Clearing buttons starts from here




document.getElementById("Clear-statement-btn").onclick = function () {
    document.getElementById("original-statement").innerHTML = "";

}
document.getElementById("Clear-output-btn").onclick = function () {
    document.getElementById("Output").innerHTML = "";
}


// Clearing buttons end here



// Concatenate Some Strings
document.getElementById("concatenateSomeStrings").onclick = function () {

    let message = "Hi!";
    let name = "Taqi Raza";
    alert(message + " " + name);

}


// Ask Name From User

document.getElementById("askNameFromUser").onclick = function () {
    let fullName = prompt("Please tell your Full Name.");
    // alert("Good Morinig!" + " " + fullName)

    // IMPORTANT NOTE = for output must use single alert or documetmt......

    document.getElementById("Output").innerHTML = "<p class='text-center'>Good Morning! " + fullName + "</p>"

}



// Comparison Operators




document.getElementById("comparisonOperators").onclick = function () {
    let num1 = 12
    let num2 = 13

    if (num1 <= num2) {
        alert("Yes, Your condition is TRUE , the 12 <= 13")
    }
    else {
        alert("No, Your condition is not TRUE , the 12 >= 13")
    }

}



// if else if


document.getElementById("ifElseIf").onclick = function () {
    let num3 = 5
    let num4 = 15

    if (num3 == num4) {
        alert("Your Condition Is TRUE!")
    }
    else if (num3 != num4) {
        alert("Your second Condition Is TRUE!")

    }
    else if (num3 === !num4) {
        alert("Your third Condition Is TRUE!")

    }
    else{
        alert("Your all Conditions are FALSE!")
    }

}





// Testing Set of Conditions


document.getElementById("testingConditions").onclick = function () {
    let Marks = prompt("PLEASE enter your Marks to check whether you are FAIL or PASS")

    if (Marks >= 90 && Marks <=100) {
        alert("Congratulations! You got A+")
    }
    else if (Marks >= 80 && Marks <=89) {
        alert("Congratulations! You got A")

    }
    else if (Marks >= 70 && Marks <=79) {
        alert("Congratulations! You got B")

    }
    else if (Marks >= 60 && Marks <=69) {
        alert("Congratulations! You got C")

    }
    else if (Marks >= 50 && Marks <=59) {
        alert("Congratulations! You got D")

    }
    else if (Marks >= 40 && Marks <=49) {
        alert("Congratulations! You got E")

    }
    else{
        alert("You are FAIL badly!")
    }

}



// if Statements Nested

document.getElementById("ifStatementsNested").onclick = function () {

let age = prompt("Your Age ?")

if(age>=18){

    let weight = prompt("Your Weight ?")

if(weight <=69){

alert("GOOD! You are a FIT guy. ")
}
else{
alert("Yoy are a FAT guy.")
}

}
else{
    alert("Your are a BABY!")
}
}



// Login 

document.getElementById("login").onclick = function () {

let userName = prompt("ENTER User-Name")
let password = prompt("ENTER Password")

if(userName=== Taqi && password===12345678){
    alert("you are LOGED in SUCCESSFULLY!")
}
else{
    alert("USER-NAME or PASSWORD is incorrect!")
}
}