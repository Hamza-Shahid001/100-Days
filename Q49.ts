/*Q49

Function with Rest Parameter: Write a function that takes a rest number representing multiple hobbies.
It sould log each hobby with a statement saying you are enjoying a hobby.*/

function loghobbies(...hobbies:string[]){
    hobbies.forEach(hobby =>{
        console.log(`I enjoy ${hobby}.`);        
    })
}

loghobbies("hockey", "Social media", "studying");
