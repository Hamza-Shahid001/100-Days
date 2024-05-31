/*Q49

Function with Rest Parameter: Write a function that takes a rest number representing multiple hobbies.
It sould log each hobby with a statement saying you are enjoying a hobby.*/
function loghobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "."));
    });
}
loghobbies("hockey", "Social media", "studying");
