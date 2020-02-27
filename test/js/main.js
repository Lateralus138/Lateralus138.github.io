function changeLeftWidth() {
    var elem, style, cl;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    if (style.width == "140px") {
        cl = document.getElementsByClassName('left')
        cl.style.width = "16px"
        return
    }
}