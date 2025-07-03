// const fs = require("fs");

// const book = {
//     title: 'Ego is the Enemy',
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// fs.writeFileSync('1-json.json', bookJSON);

// const parsedJSON = JSON.parse(bookJSON);
// console.log(parsedJSON.title);
// console.log(typeof parsedJSON);
// console.log(typeof JSON.stringify(book));

// fs.appendFileSync("json.txt", parsedJSON.title);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)

// console.log(data.title);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const userData = JSON.parse(dataJSON);

// userData.name = "Mire";
// userData.age = 27;

// const userJSON = JSON.stringify(userData);
// console.log(userJSON);

// fs.writeFileSync('1-json.json', userJSON); 