function changeLeftWidth() {
    var elem, style;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    if (style.width > 16) {
        alert('here');
        style.width = 16;
        return
    }
    style.width = 140;
}