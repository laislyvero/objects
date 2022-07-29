const notes = [{
    title:"my next trip",
    body:"awesome spain it is",

},{
    title:"book am reading",
    body:"safe harber",
},{
    title:"javascript conference",
    body:"amsterdam center, netherandands",

},
{
    title:"formua1",
    body :"qater rally"
}];
notes.forEach(function (item) {
    console.log (item.body);
});

console.log(notes[2].body);
const findNote = function (notesData, noteTitle) {
   return notesData.find(function(note) {
    return note.title.toLowerCase() === note.title.toLowerCase();
   });
};

console.log(findNote(notes, "My Next Trip"));

