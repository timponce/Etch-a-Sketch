const cellContainer = document.querySelector('.cell-container');
let slider = document.querySelector('.slider');
let output = document.querySelector('#output');
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
};

let sliderValue = (slider.value);
const makeGrid = (sliderValue) => {
const toAdd = document.createDocumentFragment();
for (let i=0; i < slider.value * slider.value; i++) {
    let cell = document.createElement('div');
    cell.style.width = 320 / slider.value + 'px';
    cell.style.height = 320 / slider.value + 'px';
    cell.id='r'+i;
    cell.className='cell';
    toAdd.appendChild(cell);
}
cellContainer.appendChild(toAdd);
};

cellContainer.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'black';
});

slider.oninput = function(e) {
    makeGrid();
    console.log(e.target.value);
};

makeGrid();



































// const cellContainer = document.querySelector('.cell-container');

// const toAdd = document.createDocumentFragment();
// for (let i=0; i <16; i++) {
//     let cell = document.createElement('div');
//     cell.id='r'+i;
//     cell.className='cell';
//     toAdd.appendChild(cell);
// }
// cellContainer.appendChild(toAdd);

// const cell = document.querySelectorAll('.cell');
// document.querySelectorAll('.cell').forEach(item => {
//     item.addEventListener('mouseover', console.log('hi'));
// });


// const chgCellColor = (e) => {
//     cell.classList.toggle('blackCell');
//     console.log(e);
// }

// // for (let i = 0; i < 16; i++) {
// //     cell[i].addEventListener('mouseover', chgCellColor);
// // }
// // cell.addEventListener('mouseover', chgCellColor);