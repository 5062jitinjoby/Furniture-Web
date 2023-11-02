function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "View More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "View Less"; 
      moreText.style.display = "inline";
    }
  }
  function readMore() {
    var dots = document.getElementById("doted");
    var moreText = document.getElementById("read");
    var btnText = document.getElementById("about-btn");
  
    if (doted.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More..."; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less"; 
      moreText.style.display = "inline";
    }
  }