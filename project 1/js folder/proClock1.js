//function toDay()
let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
toDay=()=>{
a=new Date();
time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
date=a.toLocaleDateString(undefined,options);

document.querySelector("#time").innerHTML=time+" <br/>on "+date;
}
toDay();
setInterval(toDay,1000);