import { dragstart, dragend, dragover, dragenter, dragleave, dragdrop } from "./dragAndDrop.js";
import placeholders from "./render.js";

export function addEvents() {
    const items = document.querySelectorAll('.notes__item');

    for (const item of items) {
        item.addEventListener('dragstart', dragstart);
        item.addEventListener('dragend', dragend);
    }

    for (const placeholder of placeholders) {
        placeholder.addEventListener('dragover', dragover);
        placeholder.addEventListener('dragenter', dragenter);
        placeholder.addEventListener('dragleave', dragleave);
        placeholder.addEventListener('drop', dragdrop);
    }   
}