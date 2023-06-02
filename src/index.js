//Sources: Course material from Week 1, JavaScript I
import "./styles.css";
//This part especially is based on course material
if (document.readyState !== "loading") {
  initializeTheCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeTheCode();
  });
}

function initializeTheCode() {
  document.getElementById("greeting");
  const button = document.getElementById("my-button");
  button.addEventListener("click", function () {
    console.log("Hello World!");
    document.getElementById("greeting").innerText = "My Notebook";
  });
  const addDataBtn = document.getElementById("add-data");
  addDataBtn.addEventListener("click", function () {
    // The code is for tasks 4 and 5 and it is based on this tutorial page:
    // https://www.w3schools.com/jsref/met_node_appendchild.asp
    document.createElement("li");
    let listText = "";
    let textFromUser = document.getElementById("node");
    const list = document.getElementById("list");
    const listItem = document.createElement("li");
    if (textFromUser.value === "") {
      // If user hasn't given any data, arbitrary text is added to list as requested for task 4.
      listText = document.createTextNode("Lorem modens podens lorems");
    } else {
      //This is the part for task 5
      listText = document.createTextNode(textFromUser.value);
    }
    listItem.appendChild(listText);
    list.appendChild(listItem);
  });
}
