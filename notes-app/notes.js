const chalk = require("chalk");
const fs = require("fs");
const { title } = require("process");

const getNotes = () => console.log("Your notes..");

const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  // if (duplicateNotes.length === 0) {
  //   notes.push({
  //     title: title,
  //     body: body,
  //   });
  //   saveNotes(notes);
  //   console.log(chalk.bgGreen("New note added!"));
  // } else {
  //   console.log(chalk.bgRed("Note title taken!"));
  // }

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!"));
  } else {
    console.log(chalk.bgRed("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  // const notesToKeep = notes.filter((note) => {
  //   return note.title !== title;
  // });

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    console.log(chalk.bgGreen("Note Removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed("No note found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log("No notes found.");
  } else {
    console.log(chalk.inverse("Your notes:"));
    notes.forEach((note) => {
      console.log("- " + note.title);
    });
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green.inverse('Title:', (note.title)));
    console.log('Body:', (note.body));
  } else {
    console.log(chalk.inverse.red("Note not found"));
  }
};

const saveNotes = (notes) => {
  dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    // const parsedData = JSON.parse(dataJSON);
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
