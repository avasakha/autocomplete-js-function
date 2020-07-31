const ARROW_UP_KEY_CODE = 38;
const ARROW_DOWN_KEY_CODE = 40;
const ENTER_KEY_CODE = 13;

const source = ['Tehran', 'Qom', 'Rasht', 'Tabriz'];

const container = document.getElementById('autocomplete');
container.style.position = 'relative';
const input = document.createElement('input');
input.type = 'text';
input.className = 'textbox';
container.appendChild(input);
const ul = document.createElement('ul');
ul.className = 'list';
ul.style.display = 'none';
container.appendChild(ul);

input.addEventListener('input', function () {
    const keyword = input.value;
    const filteredItem = source.filter(function (item) {
        return item.toLowerCase().includes(keyword.toLowerCase());
    });

    ul.innerHTML = '';
    ul.style.display = 'block';
    filteredItem.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
        li.addEventListener('click', function () {
            input.value = item;
            ul.style.display = 'none';
        });
    });
});

input.addEventListener('keyup', function (event) {
    if (event.keyCode === ARROW_DOWN_KEY_CODE) {
        // TODO: 
    }
    else if (event.keyCode === ARROW_UP_KEY_CODE) {
        // TODO: 
    }
    else if (event.keyCode === ENTER_KEY_CODE) {
        // TODO: 
    }
})

input.addEventListener('click', function (event) {
    event.stopPropagation();
})

document.addEventListener('click', function () {
    console.log('Click')
    ul.style.display = 'none';
})





