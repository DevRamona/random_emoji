//const ChangeFace = document.getElementById('face');
const emojis = ['😂', '🤣', '😄', '😅', '😉', '🤗', '🤩', '🫡', '😡', '😵', '🤯' ,'💀' ,'👻']
const face = document.getElementById('face');
const NewButton = document.getElementById('btn');

//face.innerHTML = 'Hello';
NewButton.addEventListener('click',() => {
    let round = Math.floor(Math.random()*emojis.length);
    let result = emojis[round];
    face.textContent = result;

}
);