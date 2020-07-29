var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
 
}

let petsWithAge = [];
//for (var i = 0; i < pets.length; i++) {
  //var pet = pets[i];
  pet.age = getAge(pet);
   pets.map((pet,i) =>([pet.age]) );

  //petsWithAge.push(pet);
//}
//console.log(petsWithAge);

let dogs = [];
//for (var i = 0; i < pets.length; i++) 
  //var pet = pets[i];
  pets.map((pet,i) =>([pet.dog]) ){
  if (pet.type === "dog") {
    dogs.push(pet);
    

  }
}
console.log(dogs);

let jasper;
//for (var i = 0; i < pets.length; i++) {
  //var pet = pets[i];
  pets.map((pet,i) =>([pet.name]) ){
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}
console.log("Jasper is " + jasper.age + " years old");