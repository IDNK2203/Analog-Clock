
let container  = document.querySelector(".container")
let sec_hand  = document.querySelector(".sec_hand")
let min_hand  = document.querySelector(".min_hand")
let hr_hand  = document.querySelector(".hr_hand")


setInterval(()=>{
    //   console.log("ml")
let day = new Date ()
let hr = day.getHours()
let min = day.getMinutes()
let sec = day.getSeconds()

// console.log( )

let deg_hr =(hr*360)/12
let deg_min = (min*360)/60
let deg_sec = ((sec*360)/60)

    sec_hand.style.transform =`rotateZ(${deg_sec}deg)`
    min_hand.style.transform =`rotateZ(${deg_min}deg)`
    hr_hand.style.transform =`rotateZ(${deg_hr}deg)`  
} ,1000)
