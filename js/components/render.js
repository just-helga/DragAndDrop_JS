import notes from "./arrayDeclaration.js";
import { addEvents } from "./addEvents.js";

const placeholders = document.querySelectorAll('.notes__placeholder');
export default placeholders;

//вывод заметок
export function renderNotes() {
    for (const placeholder of placeholders) {
        clearPlaceholder(placeholder);

        const status = placeholder.dataset.status;

        for (const note of notes) {
            if (note.status === status) {
                placeholder.appendChild(createTemplate(note.title));
            }
        }

        addEvents();
    }
}

//создание html-элемента заметки 
function createTemplate(title) {
    const item = document.createElement('div');
    item.className = 'notes__item';
    item.setAttribute('draggable', true);
    item.innerHTML = title;
    return item;
}

//очистка placeholder от заметок
function clearPlaceholder(placeholder) {
    let firstChild = placeholder.querySelector('.notes__header').nextElementSibling;

    while (firstChild) {
        placeholder.removeChild(firstChild);
        firstChild = placeholder.querySelector('.notes__header').nextElementSibling;
    }
}