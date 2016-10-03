function grabValues() {
	clearDiv();
	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;
	if(isNaN(width) || isNaN(height)){
		alert('Please enter only whole numbers');
	} else if (width == "" || height == ""){
		alert('Please enter a value for both fields');
	} 
	else {
		createGrid(width, height);
	}
}

function createGrid(width, height) {
	var html = "<table><tbody>";
	var random;
	for(var i=0; i<height;i++){
		html +="<tr>";
		for(var j=0;j<width;j++){
			random = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
			html += ("<td class='color"+random+"'></td>");
		}
		html+="</tr>";
	}
	html += "</tbody></table>";
	document.getElementById("output").innerHTML = html;
}

function clearDiv() {
	document.getElementById("output").innerHTML = "";
}
