let input = document.querySelector('#input1')
let paragraph = document.querySelector('#result')
let button = document.querySelector('.submit')
button.addEventListener('click', showanswer)

function showanswer(){
    display = input.value
    let answer = calc(display)
    paragraph.innerHTML = (`The factorial of ${display} is ${answer}`)
    input.value = " "
}

function calc(U){
    let p = 1
    for(q = 1; q <= U; q++){
        p = p*q
    }
    return p
}