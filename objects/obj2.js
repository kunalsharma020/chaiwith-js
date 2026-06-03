const course={
    coursename:"MERN Stack",
    duration:"6 months",
    price:10000,
    instructor: "kunal sharma"
}
// course.courseInstructor
// const {courseInstructor}=course

// console.log(courseInstructor) // "kunal sharma"

const {courseInstructor:instructor}=course
console.log(instructor) // "kunal sharma"

// {
//     "name":"kunal",
//     "courename":"MERN Stack",
//     "duration":"6 months",
//     "price":10000,",
//     "instructor": "kunal sharma"
// }