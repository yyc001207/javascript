window.onload = function () {
    var outer = document.getElementById("outer");
    var imgArr = document.getElementsByTagName("img");
    var navDiv = document.getElementById("navDiv");
    var allA = document.getElementsByClassName("navA");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var width = parseInt(getStyle(outer, "width"));
    navDiv.style.left = (width - allA.length * 25) / 2 + "px";
    var index = 0;
    allA[index].style.backgroundColor = "black";
    imgArr[0].style.opacity = 1;
    // 遍历所有的a标签实现点击切换
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
            imgArr[i].style.opacity = 0;
        }
        allA[index].style.backgroundColor = "black";
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