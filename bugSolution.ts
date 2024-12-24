function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Correct way to handle array of strings
for (let i = 0; i < user.length; i++) {
    console.log(greeter(user[i]));
}
// Alternative solution using map
console.log(user.map(greeter));