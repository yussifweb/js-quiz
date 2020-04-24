var users = [
  {
    name: 'Ada',
    age: 21,
    nationality: 'UK',
  },
  {
    name: 'Yukihiro',
    age: 37,
    nationality: 'Japan',
  },
  {
    name: 'Claude',
    age: 16,
    nationality: 'USA',
  },
];

// Write your code below
for (var i = 0; i < users.length; i++) {
  var number = i + 1;
  console.log("Person number " + number);
  
  console.log("Name: " + users[i].name);
  console.log("Age: " + users[i].age);
  console.log("Nationality: " + users[i].nationality);
}
