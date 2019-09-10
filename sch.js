function grade(){
let studentName = document.querySelector("#sub").value
//console.log(studentName)
let maths = document.querySelector("#score1").value
let english = document.querySelector("#score2").value
let phy = document.querySelector("#score3").value
let chem = document.querySelector("#score4").value
let bio = document.querySelector("#score5").value
let total = Number(maths)+Number(english)+Number(phy)+Number(chem)+Number(bio);
//console.log(total)
let percent = Math.round((total/500)*100)
//console.log(percent)
//let display = document.querySelector('#display').innerHTML
//console.log(display)
if (percent >= 70){
    document.querySelector('#display').innerHTML = 
    (`${studentName} has ${percent}% with grade A`)

}
else if  (percent >= 60){
    document.querySelector('#display').innerHTML = 
    (`${studentName} has ${percent}% with grade B`)
}
else if  (percent >= 50){
        document.querySelector('#display').innerHTML = 
        (`${studentName} has ${percent}% with grade C`)
}
else if  (percent >= 45){
            document.querySelector('#display').innerHTML = 
            (`${studentName} has ${percent}% with grade D`)
}
else {
    document.querySelector('#display').innerHTML = 
(`${studentName} has ${percent}% with grade F`)
}

}
