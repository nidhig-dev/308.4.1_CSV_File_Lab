
// This Lab is about converting a string into a formatted data collection object and then converting it back to a String

let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
// to store each word of the string
let cell = [];//2d array. cell[0][1] means 1st cell, 2nd letter.
let parentArr = [];
let tempRow = "";
let tempCell = "";
let rowCount = 0;
let cellCount = 0;
let keyRow = {};
let finalobj = {};

for (let i = 0; i < str.length; i++) {
    // This loop makes rows
    while (str[i] != "\n" && i < str.length) {
        // cant store string to array. gives undefined error so storing it first in a string.
        tempRow = tempRow + str[i];
        i++;
    }
    for (let j = 0; j < tempRow.length; j++) {
        // This loop makes columns
        while (tempRow[j] != "," && j < tempRow.length) {
            // cant store string to array. gives undefined error so storing it first in a string.
            tempCell = tempCell + tempRow[j];
            j++;
        }
        
        // adding cell extracted to an array
        cell.push(tempCell)
        // emptying the string to store the next set of column 
        tempCell = "";
        cellCount++;
    }
    // PART 2 -------------------------------------|
    // adding all the columns into a parent array
    parentArr.push(cell);
    // emtying the array to not duplicate the already added columns
    cell=[];
    // emptying the string to store the next set of row
    tempRow = "";
    rowCount++;
    
}

// PART 3 ----------------------------------------|
// Storing all the heading in a key array
let keys=parentArr[0];
//removing heading row from parent row. This array will now have all the values of an object
parentArr.splice(0, 1);
// For accessing entire row
for (let i= 0; i < parentArr.length;i++) {
    // add one row to one collection with key array as keys and values as parent array
    for (let j = 0; j < keys.length; j++) {
        finalobj[keys[j].toLowerCase()] = parentArr[i][j];
         
    }
    // replacing the existing array row with the object row
    parentArr.splice(i,1,finalobj);
    // emptying the object for next set of data
    finalobj = {};

}
// The orginal array
console.log("The original array-------------",parentArr);

// Removing last element from the array
parentArr.pop();

console.log("Last Object removed from array------------",parentArr);

// Adding new objext at index 1
let newObj={};
newObj.id="48";
newObj.name = "Barry";
newObj.occupation="Runner";
newObj.age="25";

parentArr.splice(1, 0,newObj);
console.log("Added new object at index 1--------------",parentArr);

// Add new object to the end of array
newObj={};
newObj.id = "7";
newObj.name = "Bilbo";
newObj.occupation = "None";
newObj.age = "111";
parentArr.push(newObj);

console.log("Added new object to the end of the array---------------",parentArr);

//average Age of the group. .

let totAge = 0;
let avgAge = 0;
for (let i = 0; i < parentArr.length; i++) {
    totAge += Number(parentArr[i].age);
    // console.log("Total of age is", totAge);
}
avgAge = totAge / parentArr.length;
console.log("The average age of this group is:", avgAge);


// Last Part-converting back to string-----------------|
let csvStr="";
let tempStr="";
csvStr=keys.join(",");
csvStr+=`\\n`
for(i=0;i<parentArr.length;i++){
    for(j=0;j<keys.length;j++){
        // picking each key from row one by one and adding comma to it
        const key = keys[j].toLowerCase();
        tempStr=parentArr[i][key];
        // if not last property in a row, add comma else add new line char
        if(j!=keys.length-1){
            csvStr=csvStr+tempStr+",";
        }
        else{
            csvStr = csvStr + tempStr;
            csvStr += `\\n`;
        }       
    }
    // removing "\n" from the last part of string
    if (i == parentArr.length-1) {
        csvStr= csvStr.slice(0,-2);
    }    
}
console.log("The new string is: ",csvStr);