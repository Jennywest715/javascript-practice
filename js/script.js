// console.log("This is a message from console")

/*console.log("Can make more than one message!")
console.log("Can make more than one message!")*/

console.log("SOUPHANY JENNY WEST!!!")

console.log("My favorite food is Alfredo ALL PASTA!")

const person = {
    "name": "john",
    "position": "manager",
    "company": "BCSD",
}
// up date an object
person.company = "bitwise";
person.position = "president";

//HOW TO CREATE AN ELEMENT!!! vvv
const heading1 = document.createElement("h1"); // <h1></h1> can do ("p") for paragraph
heading1.innerText = "Welcome"; //<h1>Welcome</h1>

//how to style with JS
heading1.style = "color:blue; font-size:20px;"
//or
heading1.style.color = "blue";
heading1.style.fontSize = "20px";   //PAY ATTENTION TO THE LETTERING fontSize not font-size


//HOW TO USE CLASSES CREATE CLASS
heading1.className = "giant";


//CREATING ELEMENTS - document.createElement()
// HOW TO FIND ELEMENTS
//document.getElementById()
//document.querySelector("looks for the first element/class with it's name") like css
//document.querySelectorAll("Will go to ALL of the elements/classes with the same name")

//HOW TO USE ID CREATE ID IN THE HTML THEN YOU CAN DO THIS
const fruit = document.body.fruitList;
fruit.style.color = "red";
fruit.style.fontSize = "20px";
//maybe like this?!?!?!
const fruit = document.getElementById("fruitList");
fruit.style.color = "red";


//how to add items to the list
const newFruit = document.createElement("li");
newFruit.innerText = "pear";

fruit.appendChild(newFruit)

document.querySelector("intro-text") //accepts strings gets you the FIRST match put the class in the ()
document.querySelectorAll() // gets all the matches


const input = document.getElementById("input");
const button = document.getElementById("addButton");

button.addEventListener("click",()=> {
    alert(clicked)
    const inputInfo = input.value;
    console.log(inputInfo)

    const li = document.createElement("li");
    li.innerText = inputInfo;

    fruit.prepend(li);
    
    input.value = "" // or null or add "Got it" this text will show after entering input
})

// adding Img
const theImage = document.createElement("img");

theImage.src = "THE LINK OF SORTS";
theImage.alt = "discribe image"

fruit.after(theImage);

// if i wanted it in the background
 document.body.style.backgroundImage = "url (IMAGE LINK)";


//telling js where we want this heading
//document.body.appendChild(heading1) adds it at the botton of the body
document.body.prepend(heading1) // adds it to the top of the body