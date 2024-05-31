/*Q47

Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model and year.
Use array destructuring to assign the durst and second laptop to variable. Then log, these variables.*/
var laptop = [
    {
        make: "Dell",
        model: "theirmodel",
        year: "2021"
    },
    {
        make: "hp",
        model: "yourmodel",
        year: "2023",
    },
    {
        make: "Lenovo",
        model: "mymodel",
        year: "2022",
    }
];
var laptop1 = laptop[0], laptop2 = laptop[1];
console.log(laptop1);
