let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let abc =document.querySelector(".abc")
let getR=0;
let getG=0;
let getB=0;
abc.textContent=`rgb(${getR},${getG},${getB})`
red.addEventListener(("input"),()=>{
    getR = red.value
    console.log(getR);
    abc.style.background=`rgb(${getR},${getG},${getB})`
    abc.textContent=`rgb(${getR},${getG},${getB})`

})
green.addEventListener(("input"),()=>{
    getG = green.value
    console.log(getG);
    abc.style.background=`rgb(${getR},${getG},${getB})`
    abc.textContent=`rgb(${getR},${getG},${getB})`
})
blue.addEventListener(("input"),()=>{
    getB = blue.value
    console.log(getB);
    abc.style.background=`rgb(${getR},${getG},${getB})`
    abc.textContent=`rgb(${getR},${getG},${getB})`
})
