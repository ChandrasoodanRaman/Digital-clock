const hourEle=document.getElementById("hour")
const minEle=document.getElementById("minutes")
const secEle=document.getElementById("seconds")
const ampEle=document.getElementById("ampm")

function updateTime()
{
    let h=Number(new Date().getHours())
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm='AM'
    if(h>12)
    {
        h=h-12
        ampm='PM'
    }
    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;

    hourEle.innerText=h;
    minEle.innerText=m;
    secEle.innerText=s;
    ampEle,(innerText=ampm);
    setTimeout(()=>
    {
        updateTime()
    },1000)
}
updateTime()