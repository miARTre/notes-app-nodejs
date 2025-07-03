// const name = require("./utils");
// const add = require("./utils");

// const validator = require("validator");
// import chalk from 'chalk';  //=> This for newest version, I prefer this
// const getNotes = require('./utils');
// const chalk = require('chalk'); => This works for oldest version

// console.log(chalk.bold.inverse.green('Success!'));

// console.log(chalk.bgBlackBright('Backgroud'));

// console.log(chalk.bold('This is bold'))

// console.log(chalk.blue.bgRed.bold('This is so ugly'));

// console.log(process.argv[2]);

// const getNotes = require("./notes.js");

// const msg = getNotes();

// console.log(msg);

// console.log(validator.isEmail("gmail.com"));
// console.log(validator.isURL(('google.com')));

// const sum = add(2, 21);
// console.log(sum);

// console.log(name);
// const fs = require("fs");

// fs.writeFileSync("notes.txt", "hello from second text");

// fs.appendFileSync(
//   "notes.txt",
//   "\nHello, Mire is there and this is for cheking append working correctly."
// );

// 15 Lectures

// const chalk = require("chalk");
// const yargs = require("yargs");
// const getNotes = require("./notes.js");
// const fs = require('fs');

// Customize yargs verzion
// yargs.version("1.1.0");

// console.log(process.argv);

// Create add command
// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   builder: {
//     title: {
//       describe: "Note title",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Note body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   //   handler: (argv) => console.log("Adding a new note!", argv),
//   handler: (argv) => {
//     console.log("Title: " + chalk.green(argv.title));
//     console.log("Body: " + chalk.red(argv.body));
//   },
// });

// Create remove command

// yargs.command({
//   command: "remove",
//   describe: "Remove a note",
//   handler: () => console.log("Removing the note"),
// });

// Create list command

// yargs.command({
//   command: "list",
//   describe: "List yours note",
//   handler: () => console.log("Listing out all notes"),
// });

// Create read command

// yargs.command({
//   command: "read",
//   describe: "Read a note",
//   handler: () => console.log("Reading a notes"),
// });

// setup for yargs add, remove, read, list

// yargs.parse();

// console.log(yargs.argv);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

// 16 Lectures

// const chalk = require("chalk");
// const yargs = require("yargs");
// const notes = require("./notes.js");
// const fs = require("fs");

// Customize yargs verzion
// yargs.version("1.1.0");

// console.log(process.argv);

// Create add command
// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   builder: {
//     title: {
//       describe: "Note title",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Note body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   //   handler: (argv) => console.log("Adding a new note!", argv),
//   handler: (argv) => {
//     // console.log("Title: " + chalk.green(argv.title));
//     // console.log("Body: " + chalk.red(argv.body));
//     notes.addNote(argv.title, argv.body);
//   },
// });

// Create remove command

// yargs.command({
//   command: "remove",
//   describe: "Remove a note",
//   handler: () => console.log("Removing the note"),
// });

// Create list command

// yargs.command({
//   command: "list",
//   describe: "List yours note",
//   handler: () => console.log("Listing out all notes"),
// });

// Create read command

// yargs.command({
//   command: "read",
//   describe: "Read a note",
//   handler: () => console.log("Reading a notes"),
// });

// setup for yargs add, remove, read, list

// yargs.parse();

// 20 Lectures

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
const fs = require("fs");
const { title } = require("process");

// Customize yargs verzion
yargs.version("1.1.0");

// console.log(process.argv);

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  //   handler: (argv) => console.log("Adding a new note!", argv),
  handler: (argv) => {
    // console.log("Title: " + chalk.green(argv.title));
    // console.log("Body: " + chalk.red(argv.body));
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

// Create list command

yargs.command({
  command: "list",
  describe: "List yours note",
  handler: () => notes.listNotes(),
});

// Create read command

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNote(argv.title),
});

// setup for yargs add, remove, read, list

yargs.parse();
