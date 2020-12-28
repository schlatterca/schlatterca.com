let data, year, month, day, hour, minute, second;
let dateText;

function onLoad(e) {
  checkDate();
  //loop = setInterval(draw, 60000);
};

function onUnload(e) {
  //clearInterval(loop);
  window.removeEventListener('load', onLoad);
  window.removeEventListener('unload', onUnload);
  delete e['returnValue'];
};


function checkDate(){
  data = new Date();
  year = data.getFullYear();
  month = data.getMonth()+1;
  day = data.getDate();
  hour = data.getHours();
  minute = data.getMinutes();
  second = data.getSeconds();
  afterDusk();
}

function afterDusk(){
  (async() => {
    const API_URL = "https://api.sunrise-sunset.org/json?lat=41.902782&lng=12.496366&date=today";
    const res = await fetch(API_URL).then(r => r.json());
    //console.log(res.results);
    var dawnHour = res.results.sunrise.split(':')[0];
    var dawnMinute = res.results.sunrise.split(':')[1].split(':')[0];
    var duskHour = res.results.sunset.split(':')[0];
    var duskMinute = res.results.sunset.split(':')[1].split(':')[0];
    
    if(((hour > (parseInt(duskHour)+13))||
      ((hour == (parseInt(duskHour)+13))&&(minute >= (parseInt(duskMinute)))))||
      ((hour < (parseInt(dawnHour)+1))||
      ((hour == (parseInt(dawnHour)+1))&&(minute <= (parseInt(dawnMinute)))))){
      /*console.log(hour);
      console.log(minute);
      console.log(duskHour);
      console.log(duskMinute);
      console.log(dawnHour);
      console.log(dawnMinute);*/
      document.getElementsByClassName("container")[0].children[0].setAttribute("style", "text-decoration: none; color: rgb(255,255,255); display: inline;");
    } else {
      console.log(hour);
      console.log(parseInt(duskHour)+13);
      document.getElementsByClassName("container")[0].children[0].removeAttribute("href");
      document.getElementsByClassName("container")[0].children[0].setAttribute("style", "text-decoration: none; color: rgb(255,255,255); display: inline;");
      document.getElementsByClassName("background")[0].style.animation = "opacityChange_bi 10s normal forwards";
      document.getElementsByClassName("container")[0].children[0].getElementsByClassName("deep")[0].style.animation = "opacityChange_bi 10s normal forwards";
      document.getElementsByClassName("container")[0].children[0].getElementsByClassName("deep")[0].style.color = "rgb(30,50,135)";
      document.getElementsByClassName("container")[0].children[0].getElementsByClassName("fusion")[0].style.animation = "opacityChange_bi 10s normal forwards";
      document.getElementsByClassName("container")[0].children[0].getElementsByClassName("fusion")[0].style.color = "rgb(30,50,135)";
      document.getElementsByClassName("container")[0].children[0].getElementsByClassName("descript")[0].innerHTML = "È presto! Torna dopo il tramonto."+"<br />"+"Too soon! Check back after dusk.";
      document.getElementsByClassName("container")[0].children[0].getElementsByClassName("descript")[0].style.color = "rgb(30,50,135)";
      document.getElementsByClassName("container")[0].children[0].getElementsByClassName("descript")[0].style.animation = "opacityChange_bi 10s normal forwards";
    }
  })(); 
}
