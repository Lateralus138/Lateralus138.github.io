function changeLeftMenu() {
    leftMenu = document.getElementById('left-menu');
    leftH6 = document.getElementById('left-h4');
    ibodyWrap = document.getElementById('ibody-wrap');
    if (getComputedStyle(
            document.querySelector(
                '#left-menu')).width.replace(
            /[^0-9]/g, "") > 16) {
        ibodyWrap.setAttribute("style", "display: flex;");
        leftH6.setAttribute("style", "transform: rotate(90deg);display: block;margin: 0;");
        leftMenu.setAttribute("style", "width: 16px;");
        return;
    }
    ibodyWrap.setAttribute("style", "display: none;")
    leftMenu.setAttribute("style", "width: " + (window.innerWidth - 17) + "px;");
    leftH6.setAttribute("style", "transform: rotate(0deg);display: inline-block; margin: 0 auto;")
    leftMenu.setAttribute("style", "width: 100%;text-align: center;");
}