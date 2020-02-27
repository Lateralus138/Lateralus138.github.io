function changeLeftWidth() {
    var elem, style, cl;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    cl = document.getElementsByClassName('left')
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.width = (16 + "px");
    }
    // if (style.width == "140px") {

    //     return
    // }
}