function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
	document.getElementsByClassName("menu-icon")[0].classList.toggle("close")
}

function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Show more"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Show less"; 
	  moreText.style.display = "inline";
	}
  }