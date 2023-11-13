// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result
let courseName = 'study Java Script';
let coursePrice = 50;
let courseGoals = ['Intresting Job', 'Devolepment', 'Finishing this course'];

alert(courseName);
alert(coursePrice);
alert(courseGoals[1]);


let course = { Name: 'study Java Script', Price: 50, Goals: ['Intresting Job', 'Devolepment', 'Finishing this course'] };
alert(course.Name);
alert(course.Price);
alert(course.Goals);


let mainGoals;
function Goals(){

}
mainGoals = Goals;
alert(mainGoalsGoals);



// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
let h1Element =  document.body.firstElementChild;
console.dir(h1Element);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
console.dir(h1Element.parentElement);
console.dir(h1Element.nextElementSibling);

//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
h1Element = document.getElementById('fist-element');
console.dir(h1Element);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 

let twoElement = document.querySelector('.two-element');
console.dir(twoElement);


//    and store it in a new variable with a name of your choice
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
console.dir(twoElement.textContent);

twoElement.textContent = 'hi i m here';

