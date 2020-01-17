var d = new Date();

function checkTime() {
   if (d.getHours() > 5  && d.getHours() < 17) {
      setDayTheme();
   }  else {
      setNightTheme();
   }
};

function setDayTheme() {
   console.log("Day");
   document.getElementsByTagName("BODY")[0].style.color = "#222222";
   document.getElementsByTagName("BODY")[0].style.backgroundColor = "#fff";
   document.getElementById("header-logo").getElementsByTagName("img")[0].style.filter = "invert(0)";
   document.getElementById("top-nav").getElementsByTagName("a")[0].style.color = "#222222";
   document.getElementById("top-nav").getElementsByTagName("a")[1].style.color = "#222222";
   document.getElementById("top-nav").getElementsByTagName("a")[2].style.color = "#222222";
};

function setNightTheme() {
   console.log("Night");
   document.getElementsByTagName("BODY")[0].style.color = "#fff";
   document.getElementsByTagName("BODY")[0].style.backgroundColor = "#222222";
   document.getElementById("header-logo").getElementsByTagName("img")[0].style.filter = "invert(1)";
   document.getElementById("top-nav").getElementsByTagName("a")[0].style.color = "#fff";
   document.getElementById("top-nav").getElementsByTagName("a")[1].style.color = "#fff";
   document.getElementById("top-nav").getElementsByTagName("a")[2].style.color = "#fff";
};

checkTime();
