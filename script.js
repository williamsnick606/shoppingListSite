
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("• " + input.value + '\u00A0'));
	ul.appendChild(li);
	input.value = "";

	//Append a delete button and a line break
	var newDeleteButton=document.createElement("button");
	newDeleteButton.classList.add("delete");
	newDeleteButton.append(document.createTextNode("delete"));
	ul.appendChild(newDeleteButton)
	ul.appendChild(document.createElement("br"));
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Add an event listener to the ul.
//Then wait for a click event on the ul,
//determine which type of html element it came from by accessing target, and 
//then perform the appropriate task on that html element.

ul.addEventListener("click",function(e)
{
	//If the originator html of the click event was a delete button delete the li
	//IE delete the item if the user clicks delete
	if(e.target.tagName =="BUTTON")
	{
		e.target.previousSibling.remove();
		e.target.previousSibling.remove();
		e.target.nextSibling.remove();
		e.target.remove();

	}

	//If the originator html of the click was the textbox toggle the "done" class
	//IE cross out the item if the user clicks on it
	if(e.target.tagName=="LI")
	{
		e.target.classList.toggle("done");
	}

	//Stop the propagation since I don't want the other button to get triggered
	//e.stopPropagation(); NVM IT'S NOT A PARENT NODE :)
});