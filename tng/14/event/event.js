// button -> value -> newElement(div)
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const inputText = document.querySelector('#blankBar');
    let texts = inputText.value;

    const newBox = document.createElement('div');
    const newBoxContent = document.createElement('p');
    newBoxContent.textContent = texts;
    newBox.classList.add('box_1');
    newBox.appendChild(newBoxContent);

    const savedDataBox = document.querySelector('.savedDataBox');
    savedDataBox.appendChild(newBox);

    inputText.value = '';
});

const inputText = document.querySelector('#blankBar')

inputText.addEventListener('keydown', (event) => {
    console.log(event.key);
});