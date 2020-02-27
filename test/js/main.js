function changeLeftWidth() {
    var elem, style, cl;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    cl = document.getElementsByClassName('left')
    for (var i = 0; i < cl.length; i++) {
        cl[i].style.width = "16px";
    }
    // if (style.width == "140px") {

    //     return
    // }
}