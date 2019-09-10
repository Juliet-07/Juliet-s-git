const input = prompt("Enter the word you desire", )
const text = document.getElementById("txt")
text.innerHTML = input
const button = document.getElementById("btn1")
document.getElementById("btn1").addEventListener('click', () => {
  if (text.innerHTML === input) {

    return text.innerHTML = "", button.innerHTML = "Come"

  } else if (text.innerHTML === "") {

    return text.innerHTML = input, button.innerHTML = "go"

  }
})

