setInterval(showTime, 1000)

function showTime(){
    let date=new Date()
    document.querySelector(".digits").textContent=date.toLocaleTimeString()
    console.log(date.toLocaleTimeString())

}