
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



// function sec_tick (){

//     let ang = `rotateZ(${deg_sec}deg)`
//     // console.log(ang)
//     sec_hand.style.transform =ang
//     if (deg_sec == 360){
//         deg_sec = 0
//     }
//     else{
//         deg_sec = deg_sec + 6
//     }

// }

// function min_tick (){

//     let ang = `rotateZ(${deg_min}deg)`
//     // console.log(ang)
//     min_hand.style.transform =ang
//     if (deg_min == 360){
//         deg_min = 0
//     }
//     else{
//         deg_min = deg_min + 0.1;
//     }

// }

// function hr_tick (){
//     let ang = `rotateZ(${deg_hr}deg)`
//     // console.log(ang)
//     hr_hand.style.transform =ang
//     if (deg_hr == 360){
//         deg_hr = 0
//     }
//     else{
//         deg_hr = deg_hr + 0.008333
//     }

// }
// setInterval(sec_tick , 1000)
// setInterval(min_tick , 1000)
// setInterval(hr_tick , 1000)
