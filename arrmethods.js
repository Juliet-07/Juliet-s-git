let interns = [
    {name:"Juliet", age: 22, hobby: "Cooking"},
    {name:"Faith", age: 23, hobby: "House decoration"},
    {name:"Vera", age: 21, hobby: "Makeup", fulldata(){return (`${this.name} is ${this.age} years old & loves ${this.hobby}`)}},
    {name:"Yvonne", age: 21, hobby: "Dancing"},
    {name:"Happiness", age: 23, hobby: "Fashion"}
]
let [first,second,third,fourth,fifth] = interns
let sum = (first.age + second.age + third.age + fourth.age + fifth.age)-10
console.log(sum)


interns[2].fulldata()
console.log(interns[2].fulldata())

let scores = [20, 30, 60, 100]
let newscores = scores.map(scores =>{
    return scores*2
})
console.log(newscores)
let sumScores = newscores.reduce((acc, newscores)=>{
    return (acc + newscores)
})
console.log(sumScores)
