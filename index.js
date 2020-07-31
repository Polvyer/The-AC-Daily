const select = document.querySelector('select');
const logo = document.querySelector('#site-logo');

function update(bgColor) {
    logo.style.background = bgColor;
}

select.onchange = () => {
    switch(select.value) {
        case 'black':
            update('black')
            break;
        case 'white':
            update('white')
            break;
        default:
            update('#9e8364')
    }
}