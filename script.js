//your JS code here. If required.
const statustext = document.getElementById("status");
const enterbutton = document.getElementById("enterBtn");

enterbutton.addEventListener("click", function (){
     const h1element = document.createElement("h1");
	 h1element.innerText = "Entered Metaverse";
	 statustext.replaceWith(h1element);
});