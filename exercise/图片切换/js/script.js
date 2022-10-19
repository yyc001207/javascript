window.onload = function () {
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    //    获取img标签
    var img = document.getElementsByTagName("img")[0];
    var imgArr = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
    var altArr = ["温迪", "爷", "龙哥", "阿贝多", "甘羊"];
    var index = 0;
    var info = document.getElementById("info");
    info.innerHTML = "共" + imgArr.length + "页，第" + (index + 1) + "页";
    prev.onclick = function () {
        index--;
        if (index < 0) {
            index = imgArr.length - 1;
            img.src = imgArr[index];
            img.alt = altArr[index];
        } else {
            img.src = imgArr[index];
            img.alt = altArr[index];
        }
        info.innerHTML = "共" + imgArr.length + "页，第" + (index + 1) + "页";
    };
    next.onclick = function () {
        index++;
        if (index > imgArr.length - 1) {
            index = 0;
            img.src = imgArr[index];
            img.alt = altArr[index];
        } else {
            img.src = imgArr[index];
            img.alt = altArr[index];
        }
        info.innerHTML = "共" + imgArr.length + "页，第" + (index + 1) + "页";
    };

};