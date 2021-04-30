console.log("this is tut 63");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

//event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('dragstart has been triggard');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0)

});

imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imgBox';
    console.log('dragend has been triggard');


});



for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('dragover has been triggard');


    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('drageenter has been triggard');
        e.target.className += ' dashed';

    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('dragleave has been triggard');
        e.target.className= 'whiteBox';

    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('drop has been triggard');
        e.target.append(imgBox);
    });
}