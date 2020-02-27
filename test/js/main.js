function changeLeftWidth() {
    var elem, style;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    if (style.width == "140px") {
        document.getElementsByClassName('left').style.width = "16px";
        return
    }
    document.getElementsByClassName('left').style.width = "140px";
}