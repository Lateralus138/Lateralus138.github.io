function changeLeftWidth() {
    var elem, style, cl;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    cl = document.getElementsByClassName('left')
    for (var i = 0; i < elem.length; i++) {
        alert(elem[i]);
    }
    // if (style.width == "140px") {

    //     return
    // }
}