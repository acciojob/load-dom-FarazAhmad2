//your JS code here. If required.
document.body.onload = addElement;

  function addElement() {
    // create a new div element
    const newDiv = document.createElement("p");
  
    // and give it some content
    const newContent = document.createTextNode("DOM load success");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }