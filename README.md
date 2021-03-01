# README Generator
![GitHub contributors](https://img.shields.io/github/contributors/larrygjenkins/larrygjenkins.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
The goal of this project was to create a command-line application that would prompt users to answer a series of questions and then produce a quality README file based on their responses.

## Acceptance Criteria
1. The application should be run entirely from the command line.
2. Users are prompted with a series of questions, including the title of their project, a description, installation instructions, and licensing information. 
3. After users answer all displayed questions, the application creates a new README file, whicih includes all of their responses in the appropriate sections. 

## Solution
This application uses the Moment.js JavaScript library to retrieve and display the current date at the top of the page. 

**Variable and function used to display current date**

    var currentDate = moment().format("dddd, MMMM DD, YYYY");

    function setDate() {
        var displayDate = document.getElementById("currentDay");
        displayDate.innerHTML = currentDate;
    }

    setDate();

The library was also used to store the current hour of the day in a variable. That variable was then used to determine what class - past, present, or future - should be assigned to each time block. The class determined the color-coding each block received. 

**Variable and function used to determine past, present, or future classification**

    var currentHour = moment().format("H");

    function pastPresentFuture9 () {
    if (currentHour == 9) {
        $("#9").removeClass("past");
        $("#9").removeClass("future");
        $("#9").addClass("present");
    } 

    else if (currentHour > 9) {
        $("#9").removeClass("present");
        $("#9").removeClass("future");
        $("#9").addClass("past");
    }

    else {
        $("#9").removeClass("present");
        $("#9").removeClass("past");
        $("#9").addClass("future");
    }}

Text areas were used to capture events and/or tasks for each given time block. Each text area has an associated save button, and when a user selects the button, any text they entered is saved to local storage.  

**Example of event listener used to save data to local storage**

    $(".saveBtn").on("click", function(){
    event.preventDefault();
    
    var taskDescriptionNine = document.getElementById("9Task");

    localStorage.setItem("9AM", taskDescriptionNine.value);
    })

This stored information is retrieved and displayed when a user refreshes (or returns to) the application.

**Example of variable and function used to retrieve data from local storage**

    var nineAmTask = localStorage.getItem("9AM");

    function showTasks() {
    $("#9Task").text(nineAmTask);
    }

    showTasks();

## Technologies Used
1. JavaScript
2. NodeJS
3. Node Package Manager (NPM)
4. Inquirer.js 

## Questions?
Contact me at the following locations:

* Email: <a href="mailto:larrygjenkins@gmail.com">larrygjenkins@gmail.com</a>
* GitHub: <a href="https://github.com/larrygjenkins">github.com/larrygjenkins</a>
* LinkedIn: <a href="https://www.linkedin.com/in/l-jenkins/">linkedin.com/in/l-jenkins</a>

## Location
Use the following link to access the repository associated with this project: [README Generator Repository](https://github.com/larrygjenkins/README_Generator)

Use the following link to access the application: [Daily Planner](https://larrygjenkins.github.io/DailyPlanner/)

## Example Image
Following is an image of the application:

![README Generator Application](./assets/images/DailyPlannerScreenshot.PNG)