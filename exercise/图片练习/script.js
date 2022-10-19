function myClick(id, fun) {
    var btn = document.getElementById(id);
    btn.onclick = fun;
}
window.onload = function () {
    var img1 = document.getElementById("img1");
    var imgArr = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg"];
    var timer;
    var i = 0;
    myClick("btn1", function () {
        clearInterval(timer);
        timer = setInterval(function () {
            if (i >= imgArr.length) {
                i = 0;
            }
            img1.src = imgArr[i];
            i++;
        }, 500);
    });
    myClick("btn2", function () {
        clearInterval(timer);
    });
};