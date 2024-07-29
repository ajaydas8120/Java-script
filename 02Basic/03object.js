//const tinderUser= new Object() // singalton object
//console.log(tinderUser)

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.islogedIn = "false"
//console.log(tinderUser)

const regularUser = {
    email : "somthig@gmail.com",
    fullName : {
        userfullName : {
            firstName : "Ajay",
            lastName : "Bairagi"
        }
    }
}
//console.log(regularUser.fullName.userfullName.firstName.lastName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
//const obj3 = {obj1,obj2}
//console.log( typeof obj3)
 //const obj3 = Object.assign(obj1,obj2)
 //console.log(obj3)

 //const obj3 = {...obj1,...obj2} //spred
 //console.log(obj3)

//  const user = [
//     {
//   idName: "10",
//   email : "ajay@gmail.com"
//     }
//     {
//         id : "3",
//         email : "ajuu@gmail.com "
//     }
//     {
//         id : "4",
//         email : "ajuu@gmail.com "
//     }
//     {
//         id : "5",
//         email : "ajuu@gmail.com "
//     }

//  ]

  //user[1].email
  
//   console.log(Object.keys(tinderUser))
//   console.log(Object.values(tinderUser))
//   console.log(tinderUser.hasOwnProperty('islogedIn'))
//   console.log(tinderUser.hasOwnProperty('islogedI'))

const course = {
    courseName : "java script",
    courseFees : "999",
    courseInstructor :"Ajay"
 
}
//console.log(course.courseFees)
const {courseInstructor : instructor} =course
//console.log(courseInstructor)

console.log(instructor)