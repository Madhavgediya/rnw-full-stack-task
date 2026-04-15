var fs = require("fs");

fs.writeFileSync("mg.txt", "this is my name madhav gediya");

// fs.writeFile("myfile.txt", "This is my first file", function (err) {
//   if (err) {
//     console.error("Error writing file");
//   } else {
//     console.log("File written successfully");
//   }
// });

console.log(20 + 20);
console.log("Hello Madhav Gediya");

function fruits(item) {
  console.log("This is ", item);
}

fruits("Apple");
fruits("Banana");
fruits("Orange");
