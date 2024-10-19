import notes from "./arrayDeclaration.js";
import { renderNotes } from "./render.js";

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    if (input.value !== '') {

        notes.push({title: input.value, status: 'new'});
        input.value = '';
        
        renderNotes();
    }
})