function changeLeftWidth() {
    var elem, style;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem);
    if (style.width == "140px") {
        document.getElementsByClassName('left')[0].style.width = "16px";
        return
    }
    document.getElementsByClassName('left')[0].style.width = "140px";
}