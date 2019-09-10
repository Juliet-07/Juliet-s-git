let interns = [
    {name:"Juliet", age: 22, hobby: "Cooking"},
    {name:"Faith", age: 23, hobby: "House decoration"},
    {name:"Vera", age: 21, hobby: "Makeup", fulldetails(){return (`${this.name} is ${this.age} years old & loves ${this.hobby}`)}},
    {name:"Yvonne", age: 21, hobby: "Dancing"},
    {name:"Happiness", age: 23, hobby: "Fashion"}
]
let {age} = interns
let sum = age-10
console.log(sum)


interns[2].fulldetails()
console.log(interns[2].fulldetails())

// let scores = [20, 30, 60, 100]
// return scores*2
