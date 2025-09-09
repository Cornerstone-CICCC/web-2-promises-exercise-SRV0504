const fs = require("fs").promises;

fs.readFile("./firstname.txt", "utf-8")
  .then(first => {
    return fs.readFile("./lastname.txt", "utf-8").then(last => ({ first, last }));
  })
  .then(data => {
    return fs.readFile("./age.txt", "utf-8").then(age => ({ ...data, age }));
  })
  .then(data => {
    return fs.readFile("./hobbies.txt", "utf-8").then(hobbiesData => {
      const hobbies = JSON.parse(hobbiesData);
      console.log(
        `${data.first} ${data.last} is ${data.age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
      );
    });
  })
  .catch(err => console.error(err));


async function readFiles() {
  try {
    const first = await fs.readFile("./firstname.txt", "utf-8");
    const last = await fs.readFile("./lastname.txt", "utf-8");
    const age = await fs.readFile("./age.txt", "utf-8");
    const hobbiesData = await fs.readFile("./hobbies.txt", "utf-8");
    const hobbies = JSON.parse(hobbiesData);

    console.log(
      `${first} ${last} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
    );
  } catch (err) {
    console.error(err);
  }
}

readFiles();