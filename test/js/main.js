function changeLeftWidth() {
    var elem, style;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    if (style.width == "140px") {
        style.width = "16px";
        return
    }
    style.width = "140px";
}