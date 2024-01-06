
function addPerson(person){
    return function lobPerson(){
        console.log(`Person: ${person.name}, ${person.age}, ${person.job}`);
    }
}

const person1={name: 'Michael', age: 22, job: 'Frontend'}
const person2={name: 'Lena', age: 23, job: 'SMM'}

addPerson(person1)()
addPerson(person2)()