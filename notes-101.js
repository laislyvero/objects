//an array is a collection of items
const notes = ["note1", "note2", "note3"];
console.log(notes[1])

notes.forEach(function (item, index)  {
    
    console.log(`${index} -- ${item}`);
});

