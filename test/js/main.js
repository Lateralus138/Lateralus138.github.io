var tog = false;

function changeLeftWidth() {
    var elem, style, cl;
    tog = !tog;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem)[0];
    cl = document.getElementsByClassName('left');
    tag = document.getElementsByTagName('h6');
    for (i = 0; i < tag.length; i++) {
        alert(tag[i]);
    }
    if (tog === true) {
        for (var i = 0; i < cl.length; i++) {
            cl[i].style.width = (16 + "px");
        }
    } else {
        for (var i = 0; i < cl.length; i++) {
            cl[i].style.width = (140 + "px");
        }
    }
}