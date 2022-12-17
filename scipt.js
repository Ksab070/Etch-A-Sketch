

const mainContainer = document.querySelector('#mainContainer');
const reset = document.querySelector('#reset');
const gridSelector = document.querySelector('#gridSelector');
let grids = document.getElementsByClassName('grid');
let color = document.querySelector('#color')


function creator (grid=8) {
    for (let i=0;i<grid**2;i++) {
        let div = document.createElement('div');
        div.classList.add('grid');
        mainContainer.style.gridTemplateColumns = `repeat(${grid},1fr`;
        mainContainer.style.gridTemplateRows = `repeat(${grid},1fr`;
        mainContainer.append(div);
    }
    hover();
}
creator();

function reseter(option) {
    let gridsStatic = document.querySelectorAll('.grid');
    for (let i=0;i<gridsStatic.length;i++) {
        gridsStatic[i].remove();
    }
    if (option === 1) {
        creator();
        gridSelector.value = '8';
    }
    color.value = '#FFFFFF'
    hover(); 
}

function hover(color = '#FF0000') {
    for (let i = 0; i<grids.length;i++) {
        grids[i].addEventListener('mouseover', ()=> {
            grids[i].style.backgroundColor = color;
        })
    }
}
hover();


reset.addEventListener('click', ()=> {
    reseter(1)
})

gridSelector.addEventListener('change', ()=> {
    switch (parseInt(gridSelector.value)) {
        case 8: reseter(0);creator(8);break;
        case 16: reseter(0);creator(16);break;
        case 32:reseter(0);creator(32);break;
        case 64: reseter(0);creator(64);break;
    }
})

color.addEventListener('change', ()=> {
    hover(color.value)
})