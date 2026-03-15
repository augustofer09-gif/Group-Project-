let index = 0

const slides = document.querySelector(".slides")
const dots = document.querySelectorAll(".dot")
const total = dots.length

document.querySelector(".right").onclick = () => {

index++

if(index >= total){
index = 0
}

update()

}

document.querySelector(".left").onclick = () => {

index--

if(index < 0){
index = total - 1
}

update()

}

dots.forEach((dot,i)=>{

dot.onclick = ()=>{

index = i
update()

}

})

function update(){

slides.style.transform = `translateX(-${index*100}%)`

dots.forEach(dot=>dot.classList.remove("active"))

dots[index].classList.add("active")

}