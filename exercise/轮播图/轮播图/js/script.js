window.onload = function () {
    var imglist = document.getElementById("imglist");
    var imgArr = document.getElementsByTagName("img");
    var navDiv = document.getElementById("navDiv");
    var aArr = document.getElementsByTagName("a");
    imglist.style.width = 520 * imgArr.length + "px";
    navDiv.style.left = (520 - 25 * aArr.length) / 2 + "px";
    var index = 0;
    aArr[index].style.backgroundColor = "black";
    for (var i = 0; i < aArr.length; i++) {
        aArr[i].num = i;
        aArr[i].onclick = function () {
            clearInterval(timer);
            index = this.num;
            setA();
            move(imglist, "left", -520 * index, 20, function () {
                autoChange();
            });
        };
    }
    autoChange();
    function setA() {
        if (index == imgArr.length - 1) {
            index = 0;
            imglist.style.left = 0;
        }
        for (var i = 0; i < aArr.length; i++) {
            aArr[i].style.backgroundColor = "";
        }
        aArr[index].style.backgroundColor = "black";
    };
    var timer;
    function autoChange() {
        timer = setInterval(function () {
            index++;
            index %= imgArr.length;
            move(imglist, "left", -520 * index, 20, function () {
                setA();
            });
        }, 3000);
    };
};