var d = new Date();
var links = document.querySelectorAll("a");

function checkTime() 
{
   if (d.getHours() > 5  && d.getHours() < 17) 
   {
      setDayTheme();
   }  
   else 
   {
      setNightTheme();
   }
};

function setDayTheme() 
{
   console.log("Day");
   document.getElementsByTagName("body")[0].style.color = "#222222";
   document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
   document.getElementById("header-logo").getElementsByTagName("img")[0].style.filter = "invert(0)";
   for (let i = 0; i < links.length; i++) 
   {
      links[i].style.color = "#222222";
   }
};

function setNightTheme() 
{
   console.log("Night");
   document.getElementsByTagName("body")[0].style.color = "#fff";
   document.getElementsByTagName("body")[0].style.backgroundColor = "#222222";
   document.getElementById("header-logo").getElementsByTagName("img")[0].style.filter = "invert(1)";
   for (let i = 0; i < links.length; i++) 
   {
      links[i].style.color = "#fff";
   }
};

checkTime();

