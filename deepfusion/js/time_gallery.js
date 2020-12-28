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
    let dawnHour = res.results.sunrise.split(':')[0];
    let dawnMinute = res.results.sunrise.split(':')[1].split(':')[0];
    let duskHour = res.results.sunset.split(':')[0];
    let duskMinute = res.results.sunset.split(':')[1].split(':')[0];

    if(((hour > (parseInt(duskHour)+13))||
      ((hour == (parseInt(duskHour)+13))&&(minute >= (parseInt(duskMinute)))))||
      ((hour < (parseInt(dawnHour)+1))||
      ((hour == (parseInt(dawnHour)+1))&&(minute <= (parseInt(dawnMinute)))))){
      console.log("open");
    } else {
      document.getElementsByClassName("section section--head")[0].getElementsByClassName("row")[0].innerHTML = " ";
      document.getElementsByClassName("titlebox")[1].getElementsByClassName("descript")[0].innerHTML = "Troppo presto! Torna dopo il tramonto."+"<br />"+"Too soon! Check back after dusk."+"<br /><br />"+"“Deep Fusion. Fotografie notturne di un algoritmo” è un progetto di Carlo Andrea Schlatter, realizzato nel 2020 per l'Esame di Tecniche Fotografiche con il Docente Stefano Veschi presso l'ISIA di Urbino.";
    }
  })();
}
