// Iteration 1: Names and Input
let hacker1 = "ABAA"
console.log("The driver's name is", hacker1)

let hacker2 = "ABAA"
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals
// equal lenghts
    if (hacker1.length == hacker2.length) {
        console.log ("equal name length")
//Navigator has longer name
    } else if (hacker1.length < hacker2.length){
        console.log("Navagator has the longest name" )
    } else {
//Driver has longer name
    console.log( "Driver has the longest name")
    }

    // Iteration 3: Loops
//Change to capital letters and add space
    print1= hacker1.toLocaleUpperCase().split("").join(" ")
    console.log(print1)

//reverse order of the string
    let print2 = hacker1.split("").reverse().join("")
    console.log(print2)

//Layout by lexicographic order
const names = [hacker1, hacker2]
nameOrder = names.sort();

if (hacker1=== hacker2) {
    console.log("Same Name")}
 
else if (nameOrder = [hacker2, hacker1]) {
    console.log("The navigator's name goes first.")

}else {
    console.log("The driver goes first")
}

//Bonus 1: 

let paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."

function wordcount (txt) {
   return txt.split(" ").length;
}

console.log(wordcount(paragraph))

//Bonus 2: 
let phraseToCheck = "Race car"

function reverseCheck(string) {
    if (string.toLocaleUpperCase().split().join() === string.toLocaleUpperCase().split().reverse().join()) {
        console.log("palindrome")
    } else (
        console.log ("not palindrome")
    )
}

console.log(reverseCheck(phraseToCheck))
