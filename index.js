// let element = document.createElement('div') 
// element.innerHTML = "<h1> just a test</h1><p>i am writing a paragraph now</p><h2>this is just a test for a h2 tag </h2>"

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";