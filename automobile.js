/*
Author: Benjamin Fondell
Course: CS 290
Description: Javascript sorting algorithm.
4/25/2017
*/

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
    this.logMe = function(argtrue)
    			{
          		if(argtrue === true)
              {
              	console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
              }
          		else
              {
              	console.log(this.year + " " + this.make + " " + this.model);
              }
          };
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(2011, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array )
{
		var sorted = array;
    var min; var temp;

    for(var i = 0; i < sorted.length-1; i++) {
            min = i;
            for(var j = i+1; j < sorted.length; j++) {
                var testMin = comparator(sorted[j], sorted[min]);
                if(testMin === true) {
                	min = j;
                }
            }
            if(min != i) {
                    temp = sorted[i];
                    sorted[i] = sorted[min];
                    sorted[min] = temp;
            }
    }
    return sorted;
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
		if(auto1.year > auto2.year)
    {
				return true;    
    }
    else
    {
    	return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    
    firstLetterOne = auto1.make.charAt(0).toLowerCase();
    firstLetterTwo = auto2.make.charAt(0).toLowerCase();
    
    if(firstLetterOne > firstLetterTwo)
    {
    		return false;
    }
    else
    {
    		return true;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2)
{
    function getAsNum( typenum )
    {
 				switch(typenum)
        {
        		case("roadster"): return 5;
            case("pickup"): 	return 4;
        		case("suv"):			return 3;
            case("wagon"):		return 2;
            default:					return 1;
       }
    }
   	var modelNumberOne = getAsNum(auto1.type.toLowerCase());
    var modelNumberTwo = getAsNum(auto2.type.toLowerCase());
    
    if (modelNumberOne === modelNumberTwo)
    {
    		if(auto1.year > auto2.year)
        {		return true;					}
        else
        {		return false;					}
    }
    else if(modelNumberOne > modelNumberTwo)
    {
    		return true;
    }
    else
    {
    		return false;
    }
    
    
}

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)
*/
var sortedYear = sortArr(yearComparator, automobiles);
console.log("*****");
console.log("Cars Sorted by Year:");

for(var i = 0; i < sortedYear.length ; i++)
		{
		 var index = sortedYear[i];
     index.logMe(false);
    }
/*
The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)
*/
console.log(" ");
var sortedMake = sortArr(makeComparator, automobiles);
console.log("Cars Sorted by Make:");
 
for(var j = 0; j < sortedMake.length ; j++)
    {
     var index = sortedMake[j];
     index.logMe(false);
    }

/*
The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****
*/
console.log(" ");
var sortedType = sortArr(typeComparator, automobiles);
console.log("Cars Sorted by Type:");
 
for(var t = 0; t < sortedType.length ; t++)
    {
     var index = sortedType[t];
     index.logMe(true);
    }
console.log("*****");
