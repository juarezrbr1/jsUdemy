const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const getElement = document.querySelector('.container');
const elementoDiv = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    // var tag = elementos[i].tag;
    // var texto = elementos[i]['texto'];
    let {tag, texto} = elementos[i]

    let creatTag = document.createElement(tag);
    let = creatText = document.createTextNode(texto);

    // creatTag.innerText = texto;
    creatTag.appendChild(creatText);

    elementoDiv.appendChild(creatTag)
    console.log(tag, texto)
}

getElement.appendChild(elementoDiv);