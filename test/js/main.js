var tog = false;

function changeLeftWidth() {
    var elem, style, cl;
    tog = !tog;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem)[0];
    cl = document.getElementsByClassName('left')
    if (tog === true) {
        for (var i = 0; i < cl.length; i++) {
            cl[i].style.width = (16 + "px");
            cl[i].style.transform = ("rotate(90deg)");
        }
    } else {
        for (var i = 0; i < cl.length; i++) {
            cl[i].style.width = (140 + "px");
            cl[i].style.transform = ("rotate(0deg)");
        }
    }
}