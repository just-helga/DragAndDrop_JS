export function dragstart(event) {
    event.target.classList.add('notes__item--hold');
    setTimeout(() => event.target.classList.add('notes__item--hidden'), 0)
}

export function dragend(event) {
    event.target.classList.remove('notes__item--hold', 'notes__item--hidden');
}



export function dragover(event) {
    event.preventDefault();
}

export function dragenter(event) {
    clearClasses();

    if (event.target.classList.contains('notes__placeholder')) {
        event.target.classList.add('notes__placeholder--hovered');
    } else if (event.target.classList.contains('notes__item')) {
        const parent = event.target.parentNode;
        parent.classList.add('notes__placeholder--hovered');
    }
}

export function dragleave(event) {
    const related = event.relatedTarget;

    if (!event.target.contains(related)) {
        event.target.classList.remove('notes__placeholder--hovered');
    }
}

export function dragdrop(event) {
    const item = document.querySelector('.notes__item--hold');

    if (event.target.classList.contains('notes__placeholder')) {
        event.target.appendChild(item);
    } else {
        const parent = event.target.parentNode;
        parent.appendChild(item);
    }

    clearClasses();
}



function clearClasses() {
    const activePlaceholders = document.querySelectorAll('.notes__placeholder--hovered');

    if (activePlaceholders.length !== 0) {
        for (const placeholder of activePlaceholders) {
            placeholder.classList.remove('notes__placeholder--hovered');
        }
    }
}