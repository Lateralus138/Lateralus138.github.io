var tog = false;

function changeLeftWidth() {
    var elem, style, cl;
    tog = !tog;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem)[0];
    cl = document.getElementsByClassName('left')
    if (tog == true) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].style.width = (16 + "px");
        }
        return;
    } else {
        for (var i = 0; i < elem.length; i++) {
            elem[i].style.width = (140 + "px");
        }
    }
}