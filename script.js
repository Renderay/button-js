var button = document.getElementById("button");
var i = 1;
var day = new Date();

var gDay = day.getDay();
var gMonth = day.getMonth();
var gHours = day.getHours();


button.onclick = function () {
if (i == 1) {
alert("Вы нажали на кнопку.\r\n" + day);
i++;
} else {
  alert("Вы уже нажали на кнопку, хватит!\r\n" + day);
}
}
