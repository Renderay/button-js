var button = document.getElementById("button");
var text = document.getElementById("text");
var i = 1;
var Data = new Date();
var Month = Data.getMonth();
var Day = Data.getDate();
var DAy = Data.getDay();
var Hour = Data.getHours();
var Minutes = Data.getMinutes();
var Seconds = Data.getSeconds();

switch (Month)  {
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}

switch (DAy)  {
  case 0: fDay="Воскресенье"; break;
  case 1: fDay="Понедельник"; break;
  case 2: fDay="Вторник"; break;
  case 3: fDay="Среда"; break;
  case 4: fDay="Четверг"; break;
  case 5: fDay="Пятница"; break;
  case 6: fDay="Суббота"; break;
}





button.onclick = function () {
if (i == 1) {
alert("Вы нажали на кнопку.\r\n" +fDay+" "+Day+" "+fMonth+" "+Hour+":"+Minutes+":"+Seconds);
i++;
} else {
document.write("Вы уже нажали на кнопку, хватит!\r\n" +fDay+" "+Day+" "+fMonth+" "+Hour+":"+Minutes+":"+Seconds);
}
}
