var tog = false;

function changeLeftWidth() {
    var elem, style, cl;
    tog = !tog;
    elem = document.querySelector('.left');
    style = getComputedStyle(elem)[0];
    cl = document.getElementsByClassName('left')
    alert(tog);
    // if (style.width == "140px") {
    //     alert('here');
    //     for (var i = 0; i < elem.length; i++) {
    //         elem[i].style.width = (16 + "px");
    //     }
    //     return;
    // }
    // for (var i = 0; i < elem.length; i++) {
    //     elem[i].style.width = (140 + "px");
    // }
}