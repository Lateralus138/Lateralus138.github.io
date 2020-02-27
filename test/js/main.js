function changeLeftWidth() {
    leftObj = document.getElementsByClassName('Left');
    if (leftObj.style.width <= 16) {
        alert('small');
        return
    }
    alert('large');
}