function init(){
	document.getElementById("entrybutton").addEventListener("click", dothis);

}

function dothis(){
	alert("Kp Mac:" + document.getElementById("entryinput").value);
		document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
		
}



window.addEventListener('load', init);