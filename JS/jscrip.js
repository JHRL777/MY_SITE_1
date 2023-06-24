console.log ("Hello World")
let uno = 'My one hello world'
let two = 'My do not world'
let three = 'My may'
console.log (uno)


let number= 5
console.log(number)

if (number == 10 ){
    console.log(uno)
} else if (number == 5){
    console.log(three)
} else{
    console.log(two)
}

let myList = ["Hello","with","How","Name","Number",10]
console.log(myList)
console.log(myList[1])

let mySet = new Set(["Hello","with","How","Name","Number",10,11,12,11,"Hello"])
console.log(mySet)

let myMap = new Map ([["Hello", "Hola"], ["How", "Como", ["Name", "Nombre"]]])
myMap.set("Three",3)
console.log(myMap)
console.log(myMap.get("How"))
console.log(myMap.get("Hello"))
console.log(myMap.get("Three"))

for (const validar of myList){
    console.log(validar)

}

for (const validar of myMap){
    console.log(validar)

}

let myConter = 0

while (myConter < myList.length){
    console.log(myList[myConter])
    myConter++

}

class MyClass {
    constructor(name, result){
        this.name= name
        this.result= result
    }
}

let myClass = new MyClass("Hello", "Hola")

console.log(myClass)
console.log(myClass.name)