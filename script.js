function setTable()
{

	var body = document.getElementsByTagName("body")[0];
  
  	var table = document.createElement("table");
  	var tableBody = document.createElement("tbody");
  	tableBody.style.width = "400px";
  	tableBody.style.height = "400px";
  
  	for(var i = 0; i < 4; i++)
  	{
  		var row = document.createElement("tr");

  		for (var j = 1; j <= 4; j++) 
  		{
  				
  			if(i == 0)
  			{
  				var tableCell = document.createElement("th");
  				tableCell.style.width = "50px";
  				tableCell.style.height = "50px";
  				var headText = document.createTextNode("Header" + j);
  				tableCell.appendChild(headText);
  				row.appendChild(tableCell);
  			}
  			else
  			{
  				var tableCell = document.createElement("td");
  				tableCell.style.width = "50px";
  				tableCell.style.height = "50px";
  				var tableCellText = document.createTextNode(i + "," + j);
  				tableCell.style.textAlign = "center";
  				tableCell.appendChild(tableCellText);
  				row.appendChild(tableCell);
  			}

  		}

  	tableBody.appendChild(row);
  	}

	table.appendChild(tableBody);
	body.appendChild(table);

	table.setAttribute("border","1");
}


function makeButtons()
{
	//up button
	var upButton = document.createElement("button");
	upButton.id = "up";
	var upText = document.createTextNode("Up");
	upButton.appendChild(upText);
	document.body.appendChild(upButton);

	//down button
	var downButton = document.createElement("button");
	downButton.id = "down";
	var downText = document.createTextNode("Down");
	downButton.appendChild(downText);	
	document.body.appendChild(downButton);

	//left button
	var leftButton = document.createElement("button");
	leftButton.id = "left";
	var leftText = document.createTextNode("Left");
	leftButton.appendChild(leftText);
	document.body.appendChild(leftButton);

	//right button
	var rightButton = document.createElement("button");
	rightButton.id = "right";
	var rightText = document.createTextNode("Right");
	rightButton.appendChild(rightText);
	document.body.appendChild(rightButton);

	//mark button
	var markButton = document.createElement("button");
	markButton.id = "mark";
	var markText = document.createTextNode("Mark Cell");
	markButton.appendChild(markText);
	document.body.appendChild(markButton);

}


function moveUp()
{
	index = document.getElementById("this");
	if (index.parentNode.rowIndex <= 1) 
	{
		return;
	}

	var tempSwap = index.cellIndex;

	index.style.borderWidth = "1px"
	index.removeAttribute("id");
	index = index.parentNode;
	index = index.previousElementSibling;
	index = index.firstElementChild;

	for (var i = 0; i < tempSwap; i++) 
	{
		index = index.nextElementSibling;
	}

	index.style.borderWidth = "3px";
	index.id = "this";
}

function moveDown()
{
  
	index = document.getElementById("this");
	if (index.parentNode.rowIndex >= 3) 
	{
		return;
	}
	
	var tempSwap = index.cellIndex;

	index.style.borderWidth = "1px"
	index.removeAttribute("id");
	index = index.parentNode;
	index = index.nextElementSibling;
	index = index.firstElementChild;

	for (var i = 0; i < tempSwap; i++) 
	{
		index = index.nextElementSibling;
	}

	index.style.borderWidth = "3px";
	index.id = "this";
}

function moveLeft()
{
    index = document.getElementById("this");
	if (index.cellIndex <= 0) 
	{
		return;
	}
	else
	{
		index.style.borderWidth = "1px"
		index.removeAttribute("id");
		index = index.previousElementSibling;
	
		index.style.borderWidth = "3px";
		index.id = "this";
		return;
	}
	
}

function moveRight()
{
	index = document.getElementById("this");
	if (index.cellIndex >= 3) 
	{
		return;
	}

	else
	{
		index.style.borderWidth = "1px"
		index.removeAttribute("id");
		index = index.nextElementSibling;
	
		index.style.borderWidth = "3px";
		index.id = "this";
		return;
	}
}

function markCell()
{
	index = document.getElementById("this");
	index.style.backgroundColor = "yellow";
}

var theTable = setTable();
var theButtons = makeButtons();
var index = document.getElementsByTagName("td")[0];

index.id = "this";
index.style.borderWidth = "3px";

document.getElementById("up").addEventListener("click", moveUp);
document.getElementById("down").addEventListener("click", moveDown);
document.getElementById("left").addEventListener("click", moveLeft);
document.getElementById("right").addEventListener("click", moveRight);
document.getElementById("mark").addEventListener("click",markCell)






















