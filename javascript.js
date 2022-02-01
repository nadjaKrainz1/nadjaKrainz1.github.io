let temp = "";
let change;

automaticRight();

function automaticLeft() {
    change = setInterval(changeleft, 5000);
}

function automaticRight() {
    change = setInterval(changeright, 5000);
}

function changeleft(){
    temp = document.images[4].src;
    document.images[4].src = document.images[3].src;
    document.images[3].src = document.images[2].src;
    document.images[2].src = document.images[1].src;
    document.images[1].src = document.images[0].src;
    document.images[0].src = temp;
    clearInterval(change);
    automaticLeft();
}

function changeright() {
    temp = document.images[0].src;
    document.images[0].src = document.images[1].src;
    document.images[1].src = document.images[2].src;
    document.images[2].src = document.images[3].src;
    document.images[3].src = document.images[4].src;
    document.images[4].src = temp;
    clearInterval(change);
    automaticRight();
}