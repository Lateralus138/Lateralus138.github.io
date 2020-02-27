var tog = false;

function changeLeftWidth() {
    var elem, style, cl;
    tog = !tog;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem)[0];
    cl = document.getElementsByClassName('left');
    tag = document.getElementsByTagName('h6');
    if (tog === true) {
        for (var i = 0; i < cl.length; i++) {
            cl[i].style.width = (16 + "px");
        }
        for (i = 0; i < tag.length; i++) {
            tag[i].style.transform = ("rotate(90deg)");
        }
    } else {
        for (var i = 0; i < cl.length; i++) {
            cl[i].style.width = (140 + "px");
        }
    }
}