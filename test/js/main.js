function changeLeftWidth() {
    var elem,
        style;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    alert(style.width)
}