# Introduction

- ✅ The first stage will have you transform raw data into a formatted array of objects according to a specification. 
- ✅The second stage will have you use the output from the first stage to provide a textual report on the data.

### Part 1: Refactoring Old Code

- ✅For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.

### Part 2: Expanding Functionality

- ✅ Declare a variable that stores the number of columns in each row of data within the CSV.
-✅ Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
- ✅Store your results in a two-dimensional array.
- ✅Each row should be its own array, with individual entries for each column.
- ✅Each row should be stored in a parent array, with the heading row located at index 0.
- ✅Cache this two-dimensional array in a variable for later use.
Using the original CSV example data, here is what the result of this step should look like:

`
[["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]]`

### Part 3: Transforming Data

- ✅For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
- ✅Convert these keys to all lowercase letters for consistency.
- ✅Store these objects in an array, in the order that they were originally listed.
- ✅Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
`
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]`

### Part 4: Sorting and Manipulating Data

#### Using array methods, accomplish the following tasks, in order upon the result of Part 3:

- ✅Remove the last element from the sorted array.
- ✅Insert the following object at index 1:
`
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }`
- ✅So far, the results should look like this:

`
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]`

- ✅Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

### Part 5: Full Circle

- ✅As a final task, transform the final set of data back into CSV format.
- ✅Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.