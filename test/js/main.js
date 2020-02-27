var tog = false;

function changeLeftWidth() {
    var elem, style, cl;
    tog = !tog;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem)[0];
    cl = document.getElementsByClassName('left')
    alert(cl[0].width + '\n' + cl[1].width);
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