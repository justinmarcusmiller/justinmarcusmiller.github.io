var d = new Date();
var links = document.querySelectorAll("a");

function checkTime(startDay, startNight) 
{
   if (d.getHours() > startDay && d.getHours() < startNight) 
   {
      setDayTheme("#222", "#FFF");
   }  
   else 
   {
      setNightTheme("#FFF", "#222");
   }
};

function setDayTheme(dayTextColor, dayBackgroundColor) 
{
   console.log("Day");
   document.getElementsByTagName("body")[0].style.color = dayTextColor;
   document.getElementsByTagName("body")[0].style.backgroundColor = dayBackgroundColor;
   document.getElementById("header-logo").getElementsByTagName("img")[0].style.filter = "invert(0)";
   for (let i = 0; i < links.length; i++) 
   {
      links[i].style.color = "#222222";
      links[i].style.borderColor = "#222222";
   }
};

links.addEventListener("mouseover", function(){
    this.style.color = "red";    
});

function setNightTheme(nightTextColor, nightBackgroundColor) 
{
   console.log("Night");
   document.getElementsByTagName("body")[0].style.color = nightTextColor;
   document.getElementsByTagName("body")[0].style.backgroundColor = nightBackgroundColor;
   document.getElementById("header-logo").getElementsByTagName("img")[0].style.filter = "invert(1)";
   for (let i = 0; i < links.length; i++) 
   {
      links[i].style.color = "#FFF";
      links[i].style.borderColor = "#FFF";
   }
};