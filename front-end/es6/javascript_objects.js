

const person = {
    firstName: "Mosh",
    secondName: "Doe",
    walk (){
        console.log(this)
    },
    talk() {
        setTimeout(function(){console.log(this)}, 2000)
    }
}

// person.walk()
// console.log(this)

// const walk = person.walk.bind(person)
// walk();

person.talk();