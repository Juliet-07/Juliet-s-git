let data =[];
let details = {};
let tin;

let canname;
let canreg;
let candept;
let candob;


const submit =()=>{
canname = document.querySelector("#name").value
canreg = document.querySelector("#number").value
candept = document.querySelector("#dept").value
candob = document.querySelector("#date").value

details = {
    Name: canname,
    RegNo: canreg,
    Dept: candept,
    DOB: candob
}
let arr = data.length
tin = arr;

data.push(details)

const uls = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")

uls.appendChild(li1)
uls.appendChild(li2)
uls.appendChild(li3)
uls.appendChild(li4)

li1.appendChild(document.createTextNode(data[tin].Name))
li2.appendChild(document.createTextNode(data[tin].RegNo))
li3.appendChild(document.createTextNode(data[tin].Dept))
li4.appendChild(document.createTextNode(data[tin].DOB))

let show = document.querySelector("body").appendChild(uls)
document.querySelector("#name").value=""
document.querySelector("#number").value=""
document.querySelector("#dept").value=""
document.querySelector("#date").value=""
}


