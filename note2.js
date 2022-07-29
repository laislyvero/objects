const notes = [{
    title:"my next trip",
    body:"awesome spain it is",

},{
    title:"book am reading",
    body:"safe harber",
},{
    title:"javascript conference",
    body:"amsterdam center, netherandands",

},];
//console.log(notes[1].body);
const findNote = function (notesData, noteTitle) {
   return notesData.find(function(note) {
    return note.title.toLowerCase() === note.title.toLowerCase();
   });
};

console.log(findNote(notes, "My Next Trip"));


console.log(findNote(notes,"n"));
const findNote1 = function (noteData, query ) {
    return noteData.filter(function(note) {
        return (
            note.title.toLowerCase().includes(query.toLowerCase()) ||
            note.body.toLowerCase().includes(query.toLowerCase())
        );
    });
};
console.log(findNote1(notes,"ne"))

