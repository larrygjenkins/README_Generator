# README Generator
![GitHub contributors](https://img.shields.io/github/contributors/larrygjenkins/larrygjenkins.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
The goal of this project was to create a simple calendar application that displayed the current date and allowed users to enter tasks and/or events for the hours between 9AM and 5PM. Hours of the day would be color-coded based on whether they were in the past, present, or future, and events recorded by the user were added to (and retrieved from) local storage.

## Acceptance Criteria
1. The current day and date display at the top of the application. 
2. Time blocks for the hours of 9AM to 5PM display and are color-coded based on whether they are in the past, present, or future.
3. Users may enter text into each time block to record events and/or tasks. 
4. When users select the save button for a time block, their events/tasks are saved to local storage.
5. When users refresh the application, their saved tasks are retreived from local storage and are displayed within the appropriate time blocks. 

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
1. HTML
2. CSS
3. JavaScript
4. jQuery
5. Moment.js 

## Questions?
Contact me at the following locations:

* Email: <a href="mailto:larrygjenkins@gmail.com">larrygjenkins@gmail.com</a>
* GitHub: <a href="https://github.com/larrygjenkins">github.com/larrygjenkins</a>
* LinkedIn: <a href="https://www.linkedin.com/in/l-jenkins/">linkedin.com/in/l-jenkins</a>

## Location
Use the following link to access the repository associated with this project: [Daily Planner Repository](https://github.com/larrygjenkins/DailyPlanner)

Use the following link to access the application: [Daily Planner](https://larrygjenkins.github.io/DailyPlanner/)

## Example Image
Following is an image of the application:

![Daily Planner Application](./assets/images/DailyPlannerScreenshot.PNG)