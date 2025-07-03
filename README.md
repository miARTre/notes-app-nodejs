# 🗒️ Notes App (Node.js CLI)

A simple and elegant command-line application for managing notes.  
Built using **Node.js**, with support from `yargs` for argument parsing, `chalk` for colored output, and native `fs` for file operations.

---

## ⚙️ Features

- ➕ Add new notes via terminal
- ❌ Remove notes by title
- 📃 List all notes in storage
- 🔍 Read a specific note
- 🚫 Prevents duplicate titles
- 💾 Saves notes in `notes.json` file (local JSON DB)

---

## 📁 Project Structure

```text
node-course/
├── notes-app/
│   ├── app.js              # Main CLI entry point (with yargs setup)
│   ├── notes.js            # Core logic for add, remove, list, read
│   ├── notes.json          # Stores all notes locally (acts as a DB)
│   ├── utils.js            # Optional utilities
│   ├── package.json        # Dependencies and metadata
│   └── node_modules/       # Installed npm packages
├── playground/
│   ├── 1-json.js
│   ├── 1-json.json
│   ├── 2-arrow-function.js
│   └── 3-arrow-challenge.js
```

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### ▶️ Run the CLI

```bash
node app.js <command> [options]
```

---

## 💡 Available Commands

### ➕ Add a Note

```bash
node app.js add --title="Shopping" --body="Buy milk and bread"
```

### ❌ Remove a Note

```bash
node app.js remove --title="Shopping"
```

### 📃 List All Notes

```bash
node app.js list
```

### 🔍 Read a Specific Note

```bash
node app.js read --title="Shopping"
```

---

## 📚 Dependencies

| Package | Purpose |
|--------|---------|
| [`yargs`](https://www.npmjs.com/package/yargs) | For parsing command-line arguments |
| [`chalk`](https://www.npmjs.com/package/chalk) | For styled and colored terminal output |
| Built-in `fs` | Node’s file system module for reading and writing files |

---

## 🧪 Playground Folder

The `playground/` folder is used for practice and testing.

It contains:
- 📄 JSON parsing examples (`1-json.js`, `1-json.json`)
- 🏹 Arrow function challenges (`2-arrow-function.js`, `3-arrow-challenge.js`)

> These files are not part of the main app logic.

---


## ✅ TODO

- [ ] Add note **editing/updating** feature  
- [ ] Add **timestamps** for each note  
- [ ] Export notes to `.txt` or `.md`  
- [ ] Support **tags or categories**

---

> 💬 This project is ideal for Node.js beginners practicing modules, JSON, command-line tools and basic file handling.
