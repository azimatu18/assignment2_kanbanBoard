function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function addCard() {
    const newCardText = document.getElementById('new-card-text').value;
    if (newCardText) {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = newCardText;
        card.draggable = true;
        card.id = newCardText;
        card.ondragstart = drag;
        document.getElementById('todo-column').appendChild(card);
        document.getElementById('new-card-text').value = '';
    }
}

