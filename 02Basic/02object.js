//object consctor 
// object.create

// object literals
const Jsuser = {
    name : "Ajay",
    age : 21,
    location : "Indore",
    email :"Ajaybairagi09@gmail.com",
    isLogeedin: false,
    latLonginDays : ["monday","saturday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])


// Jsuser.email = "ajaycahtgt@gmai.com"
// console.log(Jsuser["email"])
// Object.freeze(Jsuser)
// Jsuser.email = "shubham123"
// console.log(Jsuser["email"])

// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log(`hello java script, ${this.name}`);
}

console.log(Jsuser.greeting());
