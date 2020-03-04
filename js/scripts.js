
const button = document.querySelector("button")
const body = document.querySelector ("body")

const colors = ["red", "green", "purple", "orange", "yellow", "magenta", "black", "blue", "violet", "aquamarine", "olive"]
//                0       1         2         3         4        5       6        7

body.style.backgroundColor = "midnightblue"

button.addEventListener("click", changeBackground)

function changeBackground() {
    const colorIndex = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]

}