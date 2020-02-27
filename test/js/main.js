function changeLeftWidth() {
    var elem, style, cl;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    if (style.width == "140px") {
        document.getElementsByClassName('left').setAttribute("style", "width: 16px;");
        return
    }
}