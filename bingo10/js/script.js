/**
 * BINGO
 * autor: Jhoan Charry
 */
// 

function generarNumerosBingo() {
  let bingou = [];
  let aumento = 1;
  for (let i = 0; i < 5; i++) {
    bingou[i] = [];
    for (let j = 0; j < 5; j++) {
      bingou[i][j] = 3 * aumento++;
    }
  }
  return bingou;
}
function asignarNumerosEspeciales(index, bingou) {
  const numerosEspeciales = [
    [3, 18, 33, 48, 63],
    [6, 21, 36, 51, 66],
    [9, 24, 39, 54, 69],
    [12, 27, 42, 57, 72],
    [15, 30, 45, 60, 75],
    [3, 21, 39, 27, 57, 15, 75, 63, 51],
    [
      [6, 24, 12, 42, 36],
      [33, 51, 69, 39, 63],
      [39, 69, 57, 45, 75]
    ]
  ];

  const letras = ['B', 'I', 'N', 'G', 'O', 'X', 'XXX'];
  const specialNumbers = numerosEspeciales[index];
  const letter = letras[index];

  if (index === 5 || index === 6) {
    specialNumbers.forEach(group => {
      (Array.isArray(group) ? group : [group]).forEach(num => {
        marcarNumeroEspecial(bingou, num, 'X', 'x');
      });
    });
  } else {
    specialNumbers.forEach(num => {
      marcarNumeroEspecial(bingou, num, num, 'special-number');
    });
  }

  return letter;
}

function marcarNumeroEspecial(bingou, numero, contenido, clase) {
  const row = Math.floor((numero - 1) / 15);
  const col = bingou[row].indexOf(numero);
  bingou[row][col] = { number: contenido, styleClass: clase };
}
function generarTarjetaBingo(index) {
  let bingou = generarNumerosBingo();
  let letter = asignarNumerosEspeciales(index, bingou);
  return { bingou, letter };
}
function crearElemento(tag, className, textContent = '') {
  const elem = document.createElement(tag);
  elem.className = className;
  elem.textContent = textContent;
  return elem;
}
function crearCabecera(card, letter) {
  const headerRow = crearElemento('div', 'bingo-row');
  const letters = ['B', 'I', 'N', 'G', 'O'];
  letters.forEach(l => {
    const headerCell = crearElemento('div', 'bingo-cell bingo-header', l);
    if (l === letter) headerCell.classList.add('highlighted');
    headerRow.appendChild(headerCell);
  });
  card.appendChild(headerRow);
}
function crearCuerpo(card, bingou) {
  for (let row = 0; row < 5; row++) {
    const numberRow = crearElemento('div', 'bingo-row');
    for (let col = 0; col < 5; col++) {
      const cell = crearElemento('div', 'bingo-cell');
      const cellData = bingou[row][col];
      cell.textContent = cellData.number || cellData;
      if (cellData.styleClass) cell.classList.add(cellData.styleClass);
      numberRow.appendChild(cell);
    }
    card.appendChild(numberRow);
  }
}
function crearTarjetaEnDOM(bingou, letter, index) {
  const container = document.getElementById('accordionFlushExample');
  const cardId = `flush-collapse${index}`;

  const accordionItem = crearElemento('div', 'accordion-item');
  const accordionHeader = crearElemento('h2', 'accordion-header');
  accordionHeader.id = `flush-heading${index}`;

  const accordionButton = crearElemento('button', 'accordion-button collapsed', `Tarjeta de Bingo ${index + 1} - Letra ${letter}`);
  accordionButton.type = 'button';
  accordionButton.setAttribute('data-bs-toggle', 'collapse');
  accordionButton.setAttribute('data-bs-target', `#${cardId}`);
  accordionButton.setAttribute('aria-expanded', 'false');
  accordionButton.setAttribute('aria-controls', cardId);

  const accordionCollapse = crearElemento('div', 'accordion-collapse collapse');
  accordionCollapse.id = cardId;
  accordionCollapse.setAttribute('aria-labelledby', `flush-heading${index}`);
  accordionCollapse.setAttribute('data-bs-parent', '#accordionFlushExample');

  const accordionBody = crearElemento('div', 'accordion-body');
  const card = crearElemento('div', 'bingo-card');

  crearCabecera(card, letter);
  crearCuerpo(card, bingou);

  accordionBody.appendChild(card);
  accordionCollapse.appendChild(accordionBody);
  accordionHeader.appendChild(accordionButton);
  accordionItem.appendChild(accordionHeader);
  accordionItem.appendChild(accordionCollapse);
  container.appendChild(accordionItem);
}
for (let k = 0; k < 7; k++) {
  const { bingou, letter } = generarTarjetaBingo(k);
  crearTarjetaEnDOM(bingou, letter, k);
}
