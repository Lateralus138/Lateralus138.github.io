function changeLeftWidth() {
    var elem, style;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    if (style.width > 16) {
        style.width = 16;
        return
    }
    style.width = 140;
}