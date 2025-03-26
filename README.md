# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > When a child is clicked in the browser the "addEventListener" method in the 'Kids.js' module will be called on the document (the DOM) as will it's callback function. The calback function takes one argument, the click event. We assign the target of that click to a variable so that we can access data on that click target. We then create an if statement to see whether the click target matches the data-type we're looking for, that of "child" which we added as state in the Kids() function in that same module. If that evaluates to true we execute a window.alert that accesses the dataset on the clickEvent and displays the childs name and wish nterpolated inside a template string.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Because we want to invoke the findCelebrityMatch() function for each individual child object in the database to see which celebrity matches the childs celebrity.id value. We can then use the result of that function to display the info from both the current child object and the celebrity object whose id matches the childs celebrityId. 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > in the Celebrities() function in that same module, we added the sport that each celebrity plays as additional state using the "data-" element in our html list tag. Any time those html items are clicked on in the DOM we can then access that data inside the addEventListener method using ".dataset" on the variable we assigned the click event to. We can then display that data in the window alert.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > In the main.js module we first import the 'Pairings', 'Celebrities' and 'Kids' functions from their respective modules. We then assign the html element with the id of "#container" to a variable "mainContainer" using the querySelector method. Next we build a template string containing all of the HTML for our page in which we interpolate an invokation of each function we imported in order to display the HTML that each function returns. We assign that template string to the applicationHTML variable and then render the value of that variable to the DOM using the innerHTML property on the mainContainer variable. 
