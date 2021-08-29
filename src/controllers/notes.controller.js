const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();
  console.log(newNote);

  res.send("new note");
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find();
  res.render("notes/all-notes", { notes });
};

notesCtrl.renderEditForm = (req, res) => {
  res.send("render edit form");
};

notesCtrl.updateForm = (req, res) => {
  res.send("update note");
};

notesCtrl.deleteNote = (re, res) => {
  res.send("deleting note");
};

module.exports = notesCtrl;
