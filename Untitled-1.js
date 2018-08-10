let boxHover = document.getElementsByClassName("lightweight-footprint")
let text = document.querySelector("div.lightweight-footprint > h3")

boxHover[0].addEventListener('mouseenter', function () {
    
    text.innerHTML = "Hover ativado"
})

let content = document.querySelectorAll("div#categories > ul")
console.log(content)

let content = document.getElementById('categories')