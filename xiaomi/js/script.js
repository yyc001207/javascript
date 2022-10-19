window.onload = function () {
    var imgArr = document.getElementsByClassName("img");
    var allA = document.getElementsByClassName("active");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 0;
    allA[index].style.backgroundColor = "rgba(255, 255, 255, .4)";
    allA[index].style.borderColor = "rgba(0, 0, 0, .4)";
    imgArr[index].style.opacity = 1;
    for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            clearInterval(timer);
            index = this.num;
            move(imgArr[index], "opacity", 1, 1, function () {
                autoChange();
            });
            setA();
        };
    }
    // 
    next.onclick = function () {
        clearInterval(timer);
        if (index == imgArr.length - 1) {
            index = 0;
        } else {
            index++;
        }
        move(imgArr[index], "opacity", 1, 1, function () {
            autoChange();
        });
        setA();
    };
    prev.onclick = function () {
        clearInterval(timer);
        if (index == 0) {
            index = imgArr.length - 1;
        } else {
            index--;
        }
        move(imgArr[index], "opacity", 1, 1, function () {
            autoChange();
        });
        setA();
    };
    autoChange();
    function setA() {
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "";
            allA[i].style.borderColor = "";
            imgArr[i].style.opacity = 0;
        }
        allA[index].style.backgroundColor = " rgba(255, 255, 255, .4)";
        allA[index].style.borderColor = "rgba(0, 0, 0, .4)";
    }
    var timer;
    function autoChange() {
        timer = setInterval(function () {
            index++;
            // 取模运算，当index与长度相等时，模为0。图片回到第一张
            index %= imgArr.length;
            move(imgArr[index], "opacity", 1, 1, function () {
            });
            setA();
        }, 3000);
    }
    function pause(obj) {
        obj.onmouseover = function () {
            clearInterval(timer);
        };
        obj.onmouseout = function () {
            autoChange();
        };
    }
    pause(next);
    pause(prev);
    for (var i = 0; i < imgArr.length; i++) {
        pause(imgArr[i]);
        pause(allA[index]);
    }
};